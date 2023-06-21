# ContentUpload Plugin for CrafterCMS

- The Content Upload plugin adds the following upload behaviors to the system:
    - Ability to place a shortcut for the upload content behavior in the sidebar and top navigation of Studio

# Installation

1. Install the plugin via Studio's Plugin Management UI under `Site Tools` > `Plugin Management

   OR You can also install this plugin by cloning this repository and using the Studio API.

	1a. Create a Studio JWT Token.
	1b. Execute the following CURL command a terminal

	```bash
	curl --location --request POST 'http://SERVER_AND_PORT/studio/api/2/marketplace/copy' \
	--header 'Authorization: Bearer THE_JWT_TOKEN_FOR_STUDIO' \
	--header 'Content-Type: application/json' \
	--data-raw '{
	  "siteId": "YOUR-SITE-ID",
	  "path": "THE_ABSOLUTEL_FILE_SYSTEM_PATH_TO_THIS_REPO",
	  "parameters": { }
	}
	```

# Toolbar Optional Configuration (`ui.xml`)
```xml
<widget id="org.craftercms.plugin.contentupload.openContentUploadToolbarButton">
	<plugin
		id="org.craftercms.plugin.contentupload"
		site="{site}"
		type="apps"
		name="contentupload"
		file="index.js"
	/>
	<configuration>
		<title>Upload</title><!-- The text on the button and/or tooltip -->
		<tooltip>Content Upload</tooltip><!-- Optional. Defaults to the value of `title`. Text for the tooltip. -->
		<useIcon>false</useIcon><!-- Optional. Use an icon button (no text, tooltip only) -->
		<useIconWithText>true</useIconWithText><!-- Optional. Use a button with text and icon -->
        <dialogTitle>Content Upload</dialogTitle><!-- Optional. Defaults to title. The title for the dialog that the button opens. -->
		<icon id="@mui/icons-material/FileUploadRounded"/>
	</configuration>
</widget>
```

# Sidebar Optional Configuration (`ui.xml`)
```xml
    <widget id="org.craftercms.plugin.contentupload.openContentUploadPanelButton">
       <plugin id="org.craftercms.plugin.contentupload"
               site="{site}"
               type="apps"
               name="contentupload"
               file="index.js"/>
        <!-- optional parameters -->
        <configuration>
            <title>Upload Content</title>
            <icon id="@mui/icons-material/FileUploadRounded"/>
        </configuration>
    </widget>
```