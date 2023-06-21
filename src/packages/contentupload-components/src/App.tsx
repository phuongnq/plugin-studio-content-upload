/*
 * Copyright (C) 2007-2023 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import {
  showPathSelectionDialog,
  closePathSelectionDialog,
  pathSelectionDialogClosed
} from '@craftercms/studio-ui/state/actions/dialogs';
import { showSystemNotification } from '@craftercms/studio-ui/state/actions/system';
import { dispatchDOMEvent, batchActions } from '@craftercms/studio-ui/state/actions/misc';
import { createCustomDocumentEventListener } from '@craftercms/studio-ui/utils/dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';

import StudioAPI from './api/studio';

export default function App() {
  const [path, setPath] = React.useState('/site');
  const [content, setContent] = React.useState('');
  const [processing, setProcessing] = React.useState(false);

  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const siteId = craftercms.getStore().getState().sites.active;

  const handleSelectPath = () => {
    const rootPath = '/site';
    const callbackId = 'pathSelectionDialogCallback';
    const callbackAccept = 'accept';

    dispatch(
      showPathSelectionDialog({
        rootPath: rootPath ?? `/${path.split('/')[1] ?? ''}`,
        initialPath: path,
        showCreateFolderOption: false,
        allowSwitchingRootPath: !rootPath,
        stripXmlIndex: true,
        onClosed: batchActions([dispatchDOMEvent({ id: callbackId, action: 'close' }), pathSelectionDialogClosed()]),
        onOk: batchActions([dispatchDOMEvent({ id: callbackId, action: callbackAccept }), closePathSelectionDialog()])
      })
    );

    createCustomDocumentEventListener(callbackId, (detail) => {
      if (detail.action === callbackAccept) {
        const path = detail.path;
        setPath(path);
      }
    });
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsText(event.target.files[0], 'UTF-8');
    reader.onload = (e) => {
      setContent(e.target.result as string);
    }

    reader.onerror = (e) => {
      dispatch(showSystemNotification({
        message: `Error while reading file. Please try again.`,
        options: { variant: 'error' }
      }));
    };
  };

  const handleUploadXMLFile = async () => {
    if (!content) {
      return;
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(content as string, 'text/xml');
    const contentTypeNode = xmlDoc.evaluate('/*/content-type', xmlDoc, null, XPathResult.ANY_TYPE, null).iterateNext();
    const fileNameNode = xmlDoc.evaluate('/*/file-name', xmlDoc, null, XPathResult.ANY_TYPE, null).iterateNext();
    if (!contentTypeNode || !fileNameNode) {
      dispatch(showSystemNotification({
        message: 'Invalid XML document. Cannot upload content'
      }));

      return;
    }

    const contentType = contentTypeNode.childNodes[0].nodeValue;
    const fileName = fileNameNode.childNodes[0].nodeValue;

    const contentFullPath = `${path}/${fileName}`;
    setProcessing(true);
    try {
      const res = await StudioAPI.writeContent(siteId, contentFullPath, fileName, contentType, content as string);
      if (res) {
        dispatch(showSystemNotification({
          message: 'Content uploaded to the destination.'
        }));

        setContent('');
        inputRef.current.value = null;
      }
    } catch (e) {
      dispatch(showSystemNotification({
        message: `Error while uploading content: ${(e as Error).message}`
      }));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          padding: 10
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid xs={12} sx={{ display: 'inline-flex', marginTop: '30px', alignItems: 'center' }}>
              <Grid xs={8}>
                <TextField
                  id="path-read-only-input"
                  label="Path to upload"
                  value={path}
                  InputProps={{
                    readOnly: true
                  }}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid xs={4} sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  onClick={handleSelectPath}
                  disabled={processing}
                  sx={{
                    minWidth: '130px'
                  }}
                >
                  Select Path
                </Button>
              </Grid>
            </Grid>
            <CssBaseline />
            <Grid xs={12} sx={{ display: 'inline-flex', marginTop: '30px', alignItems: 'center' }}>
              <Grid xs={8}>
                <input
                  ref={inputRef}
                  type="file"
                  accept=".xml"
                  onChange={onFileChange}
                  onClick={() => { inputRef.current.value = null; }}
                />
              </Grid>
              <Grid xs={4} sx={{ textAlign: 'center' }}>
                <LoadingButton
                  variant="contained"
                  onClick={handleUploadXMLFile}
                  loading={processing}
                  disabled={!content}
                  loadingPosition="start"
                  sx={{
                    minWidth: '130px'
                  }}
                >
                  Upload Content
                </LoadingButton>
              </Grid>
            </Grid>
            <Box
              component="div"
              sx={{
                marginTop: 1,
                width: '100%',
                minHeight: '50vh',
                height: '50vh',
                overflow: "hidden",
                overflowY: "scroll",
                wordWrap: "break-word",
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark' ? '#121212' : 'grey.100',
                color: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2
              }}
            >
              <Typography variant="body2" gutterBottom>
                {content}
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
