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

import { PluginDescriptor } from '@craftercms/studio-ui';
import Dialog from './App';
import OpenContentUploadPanelButton from './components/OpenContentUploadPanelButton';
import OpenContentUploadToolbarButton from './components/OpenContentUploadToolbarButton';

const plugin: PluginDescriptor = {
  locales: undefined,
  scripts: undefined,
  stylesheets: undefined,
  id: 'org.craftercms.plugin.contentupload',
  widgets: {
    'org.craftercms.plugin.contentupload.dialog': Dialog,
    'org.craftercms.plugin.contentupload.openContentUploadPanelButton': OpenContentUploadPanelButton,
    'org.craftercms.plugin.contentupload.openContentUploadToolbarButton': OpenContentUploadToolbarButton
  }
};

export { Dialog, OpenContentUploadPanelButton, OpenContentUploadToolbarButton };

export default plugin;
