export const api = {
  "enums": [
    {
      "id": "basic-type",
      "label": "BasicType",
      "link": "#basic-type",
      "code": "[\n  <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-string\">\"StringList\"</span>,\n  <span class=\"hljs-string\">\"Int\"</span>,\n  <span class=\"hljs-string\">\"Uint\"</span>,\n  <span class=\"hljs-string\">\"Double\"</span>,\n  <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-string\">\"Variant\"</span>,\n  <span class=\"hljs-string\">\"Color\"</span>,\n  <span class=\"hljs-string\">\"Time\"</span>,\n  <span class=\"hljs-string\">\"Object\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "browser-icon",
      "label": "BrowserIcon",
      "link": "#browser-icon",
      "code": "[\n  <span class=\"hljs-string\">\"BrowserIconNone\"</span>,\n  <span class=\"hljs-string\">\"BrowserIconFolder\"</span>,\n  <span class=\"hljs-string\">\"BrowserIconFile\"</span>,\n  <span class=\"hljs-string\">\"BrowserIconMusic\"</span>,\n  <span class=\"hljs-string\">\"BrowserIconVideo\"</span>,\n  <span class=\"hljs-string\">\"BrowserIconPictures\"</span>,\n  <span class=\"hljs-string\">\"BrowserIconApplication\"</span>,\n  <span class=\"hljs-string\">\"BrowserIconDocument\"</span>,\n  <span class=\"hljs-string\">\"BrowserIconPackage\"</span>,\n  <span class=\"hljs-string\">\"BrowserIconFavorites\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "cloud-connection-state",
      "label": "CloudConnectionState",
      "link": "#cloud-connection-state",
      "code": "[\n  <span class=\"hljs-string\">\"CloudConnectionStateDisabled\"</span>,\n  <span class=\"hljs-string\">\"CloudConnectionStateUnconfigured\"</span>,\n  <span class=\"hljs-string\">\"CloudConnectionStateConnecting\"</span>,\n  <span class=\"hljs-string\">\"CloudConnectionStateConnected\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "configuration-error",
      "label": "ConfigurationError",
      "link": "#configuration-error",
      "code": "[\n  <span class=\"hljs-string\">\"ConfigurationErrorNoError\"</span>,\n  <span class=\"hljs-string\">\"ConfigurationErrorInvalidTimeZone\"</span>,\n  <span class=\"hljs-string\">\"ConfigurationErrorInvalidStationName\"</span>,\n  <span class=\"hljs-string\">\"ConfigurationErrorInvalidId\"</span>,\n  <span class=\"hljs-string\">\"ConfigurationErrorInvalidPort\"</span>,\n  <span class=\"hljs-string\">\"ConfigurationErrorInvalidHostAddress\"</span>,\n  <span class=\"hljs-string\">\"ConfigurationErrorBluetoothHardwareNotAvailable\"</span>,\n  <span class=\"hljs-string\">\"ConfigurationErrorInvalidCertificate\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "create-method",
      "label": "CreateMethod",
      "link": "#create-method",
      "code": "[\n  <span class=\"hljs-string\">\"CreateMethodUser\"</span>,\n  <span class=\"hljs-string\">\"CreateMethodAuto\"</span>,\n  <span class=\"hljs-string\">\"CreateMethodDiscovery\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "device-error",
      "label": "DeviceError",
      "link": "#device-error",
      "code": "[\n  <span class=\"hljs-string\">\"DeviceErrorNoError\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorPluginNotFound\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorVendorNotFound\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorDeviceNotFound\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorDeviceClassNotFound\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorActionTypeNotFound\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorStateTypeNotFound\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorEventTypeNotFound\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorDeviceDescriptorNotFound\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorMissingParameter\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorInvalidParameter\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorSetupFailed\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorDuplicateUuid\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorCreationMethodNotSupported\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorSetupMethodNotSupported\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorHardwareNotAvailable\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorHardwareFailure\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorAuthenticationFailure\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorDeviceInUse\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorDeviceInRule\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorDeviceIsChild\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorPairingTransactionIdNotFound\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorParameterNotWritable\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorItemNotFound\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorItemNotExecutable\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorUnsupportedFeature\"</span>,\n  <span class=\"hljs-string\">\"DeviceErrorTimeout\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "device-setup-status",
      "label": "DeviceSetupStatus",
      "link": "#device-setup-status",
      "code": "[\n  <span class=\"hljs-string\">\"DeviceSetupStatusNone\"</span>,\n  <span class=\"hljs-string\">\"DeviceSetupStatusInProgress\"</span>,\n  <span class=\"hljs-string\">\"DeviceSetupStatusComplete\"</span>,\n  <span class=\"hljs-string\">\"DeviceSetupStatusFailed\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "io-type",
      "label": "IOType",
      "link": "#io-type",
      "code": "[\n  <span class=\"hljs-string\">\"IOTypeNone\"</span>,\n  <span class=\"hljs-string\">\"IOTypeDigitalInput\"</span>,\n  <span class=\"hljs-string\">\"IOTypeDigitalOutput\"</span>,\n  <span class=\"hljs-string\">\"IOTypeAnalogInput\"</span>,\n  <span class=\"hljs-string\">\"IOTypeAnalogOutput\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "input-type",
      "label": "InputType",
      "link": "#input-type",
      "code": "[\n  <span class=\"hljs-string\">\"InputTypeNone\"</span>,\n  <span class=\"hljs-string\">\"InputTypeTextLine\"</span>,\n  <span class=\"hljs-string\">\"InputTypeTextArea\"</span>,\n  <span class=\"hljs-string\">\"InputTypePassword\"</span>,\n  <span class=\"hljs-string\">\"InputTypeSearch\"</span>,\n  <span class=\"hljs-string\">\"InputTypeMail\"</span>,\n  <span class=\"hljs-string\">\"InputTypeIPv4Address\"</span>,\n  <span class=\"hljs-string\">\"InputTypeIPv6Address\"</span>,\n  <span class=\"hljs-string\">\"InputTypeUrl\"</span>,\n  <span class=\"hljs-string\">\"InputTypeMacAddress\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "logging-error",
      "label": "LoggingError",
      "link": "#logging-error",
      "code": "[\n  <span class=\"hljs-string\">\"LoggingErrorNoError\"</span>,\n  <span class=\"hljs-string\">\"LoggingErrorLogEntryNotFound\"</span>,\n  <span class=\"hljs-string\">\"LoggingErrorInvalidFilterParameter\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "logging-event-type",
      "label": "LoggingEventType",
      "link": "#logging-event-type",
      "code": "[\n  <span class=\"hljs-string\">\"LoggingEventTypeTrigger\"</span>,\n  <span class=\"hljs-string\">\"LoggingEventTypeActiveChange\"</span>,\n  <span class=\"hljs-string\">\"LoggingEventTypeEnabledChange\"</span>,\n  <span class=\"hljs-string\">\"LoggingEventTypeActionsExecuted\"</span>,\n  <span class=\"hljs-string\">\"LoggingEventTypeExitActionsExecuted\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "logging-level",
      "label": "LoggingLevel",
      "link": "#logging-level",
      "code": "[\n  <span class=\"hljs-string\">\"LoggingLevelInfo\"</span>,\n  <span class=\"hljs-string\">\"LoggingLevelAlert\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "logging-source",
      "label": "LoggingSource",
      "link": "#logging-source",
      "code": "[\n  <span class=\"hljs-string\">\"LoggingSourceSystem\"</span>,\n  <span class=\"hljs-string\">\"LoggingSourceEvents\"</span>,\n  <span class=\"hljs-string\">\"LoggingSourceActions\"</span>,\n  <span class=\"hljs-string\">\"LoggingSourceStates\"</span>,\n  <span class=\"hljs-string\">\"LoggingSourceRules\"</span>,\n  <span class=\"hljs-string\">\"LoggingSourceBrowserActions\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "media-browser-icon",
      "label": "MediaBrowserIcon",
      "link": "#media-browser-icon",
      "code": "[\n  <span class=\"hljs-string\">\"MediaBrowserIconNone\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconPlaylist\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconRecentlyPlayed\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconLibrary\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconMusicLibrary\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconVideoLibrary\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconPictureLibrary\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconDisk\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconUSB\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconNetwork\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconAux\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconBluetooth\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconSpotify\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconAmazon\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconTuneIn\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconSiriusXM\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconVTuner\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconTidal\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconAirable\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconDeezer\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconNapster\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconSoundCloud\"</span>,\n  <span class=\"hljs-string\">\"MediaBrowserIconRadioParadise\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "network-device-state",
      "label": "NetworkDeviceState",
      "link": "#network-device-state",
      "code": "[\n  <span class=\"hljs-string\">\"NetworkDeviceStateUnknown\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStateUnmanaged\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStateUnavailable\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStateDisconnected\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStatePrepare\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStateConfig\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStateNeedAuth\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStateIpConfig\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStateIpCheck\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStateSecondaries\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStateActivated\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStateDeactivating\"</span>,\n  <span class=\"hljs-string\">\"NetworkDeviceStateFailed\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "network-manager-error",
      "label": "NetworkManagerError",
      "link": "#network-manager-error",
      "code": "[\n  <span class=\"hljs-string\">\"NetworkManagerErrorNoError\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerErrorUnknownError\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerErrorWirelessNotAvailable\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerErrorAccessPointNotFound\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerErrorNetworkInterfaceNotFound\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerErrorInvalidNetworkDeviceType\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerErrorWirelessNetworkingDisabled\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerErrorWirelessConnectionFailed\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerErrorNetworkingDisabled\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerErrorNetworkManagerNotAvailable\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "network-manager-state",
      "label": "NetworkManagerState",
      "link": "#network-manager-state",
      "code": "[\n  <span class=\"hljs-string\">\"NetworkManagerStateUnknown\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerStateAsleep\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerStateDisconnected\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerStateDisconnecting\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerStateConnecting\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerStateConnectedLocal\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerStateConnectedSite\"</span>,\n  <span class=\"hljs-string\">\"NetworkManagerStateConnectedGlobal\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "remove-policy",
      "label": "RemovePolicy",
      "link": "#remove-policy",
      "code": "[\n  <span class=\"hljs-string\">\"RemovePolicyCascade\"</span>,\n  <span class=\"hljs-string\">\"RemovePolicyUpdate\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "repeating-mode",
      "label": "RepeatingMode",
      "link": "#repeating-mode",
      "code": "[\n  <span class=\"hljs-string\">\"RepeatingModeNone\"</span>,\n  <span class=\"hljs-string\">\"RepeatingModeHourly\"</span>,\n  <span class=\"hljs-string\">\"RepeatingModeDaily\"</span>,\n  <span class=\"hljs-string\">\"RepeatingModeWeekly\"</span>,\n  <span class=\"hljs-string\">\"RepeatingModeMonthly\"</span>,\n  <span class=\"hljs-string\">\"RepeatingModeYearly\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "rule-error",
      "label": "RuleError",
      "link": "#rule-error",
      "code": "[\n  <span class=\"hljs-string\">\"RuleErrorNoError\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorInvalidRuleId\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorRuleNotFound\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorThingNotFound\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorEventTypeNotFound\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorStateTypeNotFound\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorActionTypeNotFound\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorInvalidParameter\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorInvalidRuleFormat\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorMissingParameter\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorInvalidRuleActionParameter\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorInvalidStateEvaluatorValue\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorTypesNotMatching\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorNotExecutable\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorInvalidTimeDescriptor\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorInvalidRepeatingOption\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorInvalidCalendarItem\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorInvalidTimeEventItem\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorContainsEventBasesAction\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorNoExitActions\"</span>,\n  <span class=\"hljs-string\">\"RuleErrorInterfaceNotFound\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "script-error",
      "label": "ScriptError",
      "link": "#script-error",
      "code": "[\n  <span class=\"hljs-string\">\"ScriptErrorNoError\"</span>,\n  <span class=\"hljs-string\">\"ScriptErrorScriptNotFound\"</span>,\n  <span class=\"hljs-string\">\"ScriptErrorInvalidScript\"</span>,\n  <span class=\"hljs-string\">\"ScriptErrorHardwareFailure\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "script-message-type",
      "label": "ScriptMessageType",
      "link": "#script-message-type",
      "code": "[\n  <span class=\"hljs-string\">\"ScriptMessageTypeLog\"</span>,\n  <span class=\"hljs-string\">\"ScriptMessageTypeWarning\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "setup-method",
      "label": "SetupMethod",
      "link": "#setup-method",
      "code": "[\n  <span class=\"hljs-string\">\"SetupMethodJustAdd\"</span>,\n  <span class=\"hljs-string\">\"SetupMethodDisplayPin\"</span>,\n  <span class=\"hljs-string\">\"SetupMethodEnterPin\"</span>,\n  <span class=\"hljs-string\">\"SetupMethodPushButton\"</span>,\n  <span class=\"hljs-string\">\"SetupMethodUserAndPassword\"</span>,\n  <span class=\"hljs-string\">\"SetupMethodOAuth\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "state-operator",
      "label": "StateOperator",
      "link": "#state-operator",
      "code": "[\n  <span class=\"hljs-string\">\"StateOperatorAnd\"</span>,\n  <span class=\"hljs-string\">\"StateOperatorOr\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "tag-error",
      "label": "TagError",
      "link": "#tag-error",
      "code": "[\n  <span class=\"hljs-string\">\"TagErrorNoError\"</span>,\n  <span class=\"hljs-string\">\"TagErrorThingNotFound\"</span>,\n  <span class=\"hljs-string\">\"TagErrorRuleNotFound\"</span>,\n  <span class=\"hljs-string\">\"TagErrorTagNotFound\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "thing-error",
      "label": "ThingError",
      "link": "#thing-error",
      "code": "[\n  <span class=\"hljs-string\">\"ThingErrorNoError\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorPluginNotFound\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorVendorNotFound\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorThingNotFound\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorThingClassNotFound\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorActionTypeNotFound\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorStateTypeNotFound\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorEventTypeNotFound\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorThingDescriptorNotFound\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorMissingParameter\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorInvalidParameter\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorSetupFailed\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorDuplicateUuid\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorCreationMethodNotSupported\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorSetupMethodNotSupported\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorHardwareNotAvailable\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorHardwareFailure\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorAuthenticationFailure\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorThingInUse\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorThingInRule\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorThingIsChild\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorPairingTransactionIdNotFound\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorParameterNotWritable\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorItemNotFound\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorItemNotExecutable\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorUnsupportedFeature\"</span>,\n  <span class=\"hljs-string\">\"ThingErrorTimeout\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "thing-setup-status",
      "label": "ThingSetupStatus",
      "link": "#thing-setup-status",
      "code": "[\n  <span class=\"hljs-string\">\"ThingSetupStatusNone\"</span>,\n  <span class=\"hljs-string\">\"ThingSetupStatusInProgress\"</span>,\n  <span class=\"hljs-string\">\"ThingSetupStatusComplete\"</span>,\n  <span class=\"hljs-string\">\"ThingSetupStatusFailed\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "unit",
      "label": "Unit",
      "link": "#unit",
      "code": "[\n  <span class=\"hljs-string\">\"UnitNone\"</span>,\n  <span class=\"hljs-string\">\"UnitSeconds\"</span>,\n  <span class=\"hljs-string\">\"UnitMinutes\"</span>,\n  <span class=\"hljs-string\">\"UnitHours\"</span>,\n  <span class=\"hljs-string\">\"UnitUnixTime\"</span>,\n  <span class=\"hljs-string\">\"UnitMeterPerSecond\"</span>,\n  <span class=\"hljs-string\">\"UnitKiloMeterPerHour\"</span>,\n  <span class=\"hljs-string\">\"UnitDegree\"</span>,\n  <span class=\"hljs-string\">\"UnitRadiant\"</span>,\n  <span class=\"hljs-string\">\"UnitDegreeCelsius\"</span>,\n  <span class=\"hljs-string\">\"UnitDegreeKelvin\"</span>,\n  <span class=\"hljs-string\">\"UnitMired\"</span>,\n  <span class=\"hljs-string\">\"UnitMilliBar\"</span>,\n  <span class=\"hljs-string\">\"UnitBar\"</span>,\n  <span class=\"hljs-string\">\"UnitPascal\"</span>,\n  <span class=\"hljs-string\">\"UnitHectoPascal\"</span>,\n  <span class=\"hljs-string\">\"UnitAtmosphere\"</span>,\n  <span class=\"hljs-string\">\"UnitLumen\"</span>,\n  <span class=\"hljs-string\">\"UnitLux\"</span>,\n  <span class=\"hljs-string\">\"UnitCandela\"</span>,\n  <span class=\"hljs-string\">\"UnitMilliMeter\"</span>,\n  <span class=\"hljs-string\">\"UnitCentiMeter\"</span>,\n  <span class=\"hljs-string\">\"UnitMeter\"</span>,\n  <span class=\"hljs-string\">\"UnitKiloMeter\"</span>,\n  <span class=\"hljs-string\">\"UnitGram\"</span>,\n  <span class=\"hljs-string\">\"UnitKiloGram\"</span>,\n  <span class=\"hljs-string\">\"UnitDezibel\"</span>,\n  <span class=\"hljs-string\">\"UnitBpm\"</span>,\n  <span class=\"hljs-string\">\"UnitKiloByte\"</span>,\n  <span class=\"hljs-string\">\"UnitMegaByte\"</span>,\n  <span class=\"hljs-string\">\"UnitGigaByte\"</span>,\n  <span class=\"hljs-string\">\"UnitTeraByte\"</span>,\n  <span class=\"hljs-string\">\"UnitMilliWatt\"</span>,\n  <span class=\"hljs-string\">\"UnitWatt\"</span>,\n  <span class=\"hljs-string\">\"UnitKiloWatt\"</span>,\n  <span class=\"hljs-string\">\"UnitKiloWattHour\"</span>,\n  <span class=\"hljs-string\">\"UnitEuroPerMegaWattHour\"</span>,\n  <span class=\"hljs-string\">\"UnitEuroCentPerKiloWattHour\"</span>,\n  <span class=\"hljs-string\">\"UnitPercentage\"</span>,\n  <span class=\"hljs-string\">\"UnitPartsPerMillion\"</span>,\n  <span class=\"hljs-string\">\"UnitEuro\"</span>,\n  <span class=\"hljs-string\">\"UnitDollar\"</span>,\n  <span class=\"hljs-string\">\"UnitHertz\"</span>,\n  <span class=\"hljs-string\">\"UnitAmpere\"</span>,\n  <span class=\"hljs-string\">\"UnitMilliAmpere\"</span>,\n  <span class=\"hljs-string\">\"UnitVolt\"</span>,\n  <span class=\"hljs-string\">\"UnitMilliVolt\"</span>,\n  <span class=\"hljs-string\">\"UnitVoltAmpere\"</span>,\n  <span class=\"hljs-string\">\"UnitVoltAmpereReactive\"</span>,\n  <span class=\"hljs-string\">\"UnitAmpereHour\"</span>,\n  <span class=\"hljs-string\">\"UnitMicroSiemensPerCentimeter\"</span>,\n  <span class=\"hljs-string\">\"UnitDuration\"</span>,\n  <span class=\"hljs-string\">\"UnitNewton\"</span>,\n  <span class=\"hljs-string\">\"UnitNewtonMeter\"</span>,\n  <span class=\"hljs-string\">\"UnitRpm\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "user-error",
      "label": "UserError",
      "link": "#user-error",
      "code": "[\n  <span class=\"hljs-string\">\"UserErrorNoError\"</span>,\n  <span class=\"hljs-string\">\"UserErrorBackendError\"</span>,\n  <span class=\"hljs-string\">\"UserErrorInvalidUserId\"</span>,\n  <span class=\"hljs-string\">\"UserErrorDuplicateUserId\"</span>,\n  <span class=\"hljs-string\">\"UserErrorBadPassword\"</span>,\n  <span class=\"hljs-string\">\"UserErrorTokenNotFound\"</span>,\n  <span class=\"hljs-string\">\"UserErrorPermissionDenied\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "value-operator",
      "label": "ValueOperator",
      "link": "#value-operator",
      "code": "[\n  <span class=\"hljs-string\">\"ValueOperatorEquals\"</span>,\n  <span class=\"hljs-string\">\"ValueOperatorNotEquals\"</span>,\n  <span class=\"hljs-string\">\"ValueOperatorLess\"</span>,\n  <span class=\"hljs-string\">\"ValueOperatorGreater\"</span>,\n  <span class=\"hljs-string\">\"ValueOperatorLessOrEqual\"</span>,\n  <span class=\"hljs-string\">\"ValueOperatorGreaterOrEqual\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    },
    {
      "id": "wireless-mode",
      "label": "WirelessMode",
      "link": "#wireless-mode",
      "code": "[\n  <span class=\"hljs-string\">\"WirelessModeUnknown\"</span>,\n  <span class=\"hljs-string\">\"WirelessModeAdhoc\"</span>,\n  <span class=\"hljs-string\">\"WirelessModeInfrastructure\"</span>,\n  <span class=\"hljs-string\">\"WirelessModeAccessPoint\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": []
    }
  ],
  "flags": [
    {
      "id": "create-methods",
      "label": "CreateMethods",
      "link": "#create-methods",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:CreateMethod\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "CreateMethod",
          "link": "#create-method"
        }
      ],
      "deprecations": []
    }
  ],
  "methods": [
    {
      "id": "actions-execute-action",
      "label": "Actions.ExecuteAction",
      "link": "#actions-execute-action",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Please use Integrations.ExecuteAction instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Execute a single action.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Execute a single action.",
      "deprecated": "Please use Integrations.ExecuteAction instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:params\">ParamList</a>",
          "link": "#<a href=\"#o:params\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "actions-execute-browser-item",
      "label": "Actions.ExecuteBrowserItem",
      "link": "#actions-execute-browser-item",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Please use Integrations.ExecuteBrowserItem instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Execute the item identified by itemId on the given device.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>\n  &#125;\n&#125;",
      "description": "Execute the item identified by itemId on the given device.",
      "deprecated": "Please use Integrations.ExecuteBrowserItem instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "actions-execute-browser-item-action",
      "label": "Actions.ExecuteBrowserItemAction",
      "link": "#actions-execute-browser-item-action",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Please use Integrations.ExecuteBrowserItem instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Execute the action for the browser item identified by actionTypeId and the itemId on the given device.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>\n  &#125;\n&#125;",
      "description": "Execute the action for the browser item identified by actionTypeId and the itemId on the given device.",
      "deprecated": "Please use Integrations.ExecuteBrowserItem instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:params\">ParamList</a>",
          "link": "#<a href=\"#o:params\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "actions-get-action-type",
      "label": "Actions.GetActionType",
      "link": "#actions-get-action-type",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Please use the Integrations namespace instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the ActionType for the given ActionTypeId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:actionType\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:action-type\\\">$ref:ActionType</a></span>\n  &#125;\n&#125;",
      "description": "Get the ActionType for the given ActionTypeId.",
      "deprecated": "Please use the Integrations namespace instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:actionType\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:action-type\\\">$ref:ActionType</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:action-type\">ActionType</a>",
          "link": "#<a href=\"#o:action-type\">-action-type</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-delete-mqtt-policy",
      "label": "Configuration.DeleteMqttPolicy",
      "link": "#configuration-delete-mqtt-policy",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Delete a MQTT policy from the broker.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"clientId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Delete a MQTT policy from the broker.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"clientId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-delete-mqtt-server-configuration",
      "label": "Configuration.DeleteMqttServerConfiguration",
      "link": "#configuration-delete-mqtt-server-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Delete a MQTT Server interface of the server.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Delete a MQTT Server interface of the server.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-delete-tcp-server-configuration",
      "label": "Configuration.DeleteTcpServerConfiguration",
      "link": "#configuration-delete-tcp-server-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Delete a TCP interface of the server. Note: if you are deleting the configuration for the interface you are currently connected to, the connection will be dropped.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Delete a TCP interface of the server. Note: if you are deleting the configuration for the interface you are currently connected to, the connection will be dropped.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-delete-web-server-configuration",
      "label": "Configuration.DeleteWebServerConfiguration",
      "link": "#configuration-delete-web-server-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Delete a WebServer interface of the server.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Delete a WebServer interface of the server.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-delete-web-socket-server-configuration",
      "label": "Configuration.DeleteWebSocketServerConfiguration",
      "link": "#configuration-delete-web-socket-server-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Delete a WebSocket Server interface of the server. Note: if you are deleting the configuration for the interface you are currently connected to, the connection will be dropped.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Delete a WebSocket Server interface of the server. Note: if you are deleting the configuration for the interface you are currently connected to, the connection will be dropped.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-get-available-languages",
      "label": "Configuration.GetAvailableLanguages",
      "link": "#configuration-get-available-languages",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Use the locale property in the Handshake message instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Returns a list of locale codes available for the server. i.e. en_US, de_AT\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"languages\"</span>: [\n      <span class=\"hljs-string\">\"String\"</span>\n    ]\n  &#125;\n&#125;",
      "description": "Returns a list of locale codes available for the server. i.e. en_US, de_AT",
      "deprecated": "Use the locale property in the Handshake message instead.",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"languages\"</span>: [\n    <span class=\"hljs-string\">\"String\"</span>\n  ]\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "configuration-get-configurations",
      "label": "Configuration.GetConfigurations",
      "link": "#configuration-get-configurations",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get all configuration parameters of the server.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"basicConfiguration\"</span>: &#123;\n      <span class=\"hljs-attr\">\"d:language\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n      <span class=\"hljs-attr\">\"d:serverTime\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n      <span class=\"hljs-attr\">\"d:timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n      <span class=\"hljs-attr\">\"debugServerEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n      <span class=\"hljs-attr\">\"serverName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n      <span class=\"hljs-attr\">\"serverUuid\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n    &#125;,\n    <span class=\"hljs-attr\">\"cloud\"</span>: &#123;\n      <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n    &#125;,\n    <span class=\"hljs-attr\">\"tcpServerConfigurations\"</span>: [\n      <span class=\"hljs-string\">\"$ref:ServerConfiguration\"</span>\n    ],\n    <span class=\"hljs-attr\">\"webServerConfigurations\"</span>: [\n      <span class=\"hljs-string\">\"$ref:WebServerConfiguration\"</span>\n    ],\n    <span class=\"hljs-attr\">\"webSocketServerConfigurations\"</span>: [\n      <span class=\"hljs-string\">\"$ref:ServerConfiguration\"</span>\n    ]\n  &#125;\n&#125;",
      "description": "Get all configuration parameters of the server.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"basicConfiguration\"</span>: &#123;\n    <span class=\"hljs-attr\">\"d:language\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"d:serverTime\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n    <span class=\"hljs-attr\">\"d:timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"debugServerEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"serverName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"serverUuid\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"cloud\"</span>: &#123;\n    <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"tcpServerConfigurations\"</span>: [\n    <span class=\"hljs-string\">\"$ref:ServerConfiguration\"</span>\n  ],\n  <span class=\"hljs-attr\">\"webServerConfigurations\"</span>: [\n    <span class=\"hljs-string\">\"$ref:WebServerConfiguration\"</span>\n  ],\n  <span class=\"hljs-attr\">\"webSocketServerConfigurations\"</span>: [\n    <span class=\"hljs-string\">\"$ref:ServerConfiguration\"</span>\n  ]\n&#125;",
      "references": [
        {
          "label": "ServerConfiguration",
          "link": "#server-configuration"
        },
        {
          "label": "ServerConfiguration",
          "link": "#server-configuration"
        },
        {
          "label": "WebServerConfiguration",
          "link": "#web-server-configuration"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-get-mqtt-policies",
      "label": "Configuration.GetMqttPolicies",
      "link": "#configuration-get-mqtt-policies",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get all MQTT broker policies.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"mqttPolicies\"</span>: [\n      <span class=\"hljs-string\">\"$ref:MqttPolicy\"</span>\n    ]\n  &#125;\n&#125;",
      "description": "Get all MQTT broker policies.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"mqttPolicies\"</span>: [\n    <span class=\"hljs-string\">\"$ref:MqttPolicy\"</span>\n  ]\n&#125;",
      "references": [
        {
          "label": "MqttPolicy",
          "link": "#mqtt-policy"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-get-mqtt-server-configurations",
      "label": "Configuration.GetMqttServerConfigurations",
      "link": "#configuration-get-mqtt-server-configurations",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get all MQTT Server configurations.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"mqttServerConfigurations\"</span>: [\n      <span class=\"hljs-string\">\"$ref:ServerConfiguration\"</span>\n    ]\n  &#125;\n&#125;",
      "description": "Get all MQTT Server configurations.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"mqttServerConfigurations\"</span>: [\n    <span class=\"hljs-string\">\"$ref:ServerConfiguration\"</span>\n  ]\n&#125;",
      "references": [
        {
          "label": "ServerConfiguration",
          "link": "#server-configuration"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-get-time-zones",
      "label": "Configuration.GetTimeZones",
      "link": "#configuration-get-time-zones",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Use System.GetTimeZones instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the list of available timezones.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"timeZones\"</span>: [\n      <span class=\"hljs-string\">\"String\"</span>\n    ]\n  &#125;\n&#125;",
      "description": "Get the list of available timezones.",
      "deprecated": "Use System.GetTimeZones instead.",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"timeZones\"</span>: [\n    <span class=\"hljs-string\">\"String\"</span>\n  ]\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "configuration-set-cloud-enabled",
      "label": "Configuration.SetCloudEnabled",
      "link": "#configuration-set-cloud-enabled",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Sets whether the cloud connection is enabled or disabled in the settings.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Sets whether the cloud connection is enabled or disabled in the settings.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-set-debug-server-enabled",
      "label": "Configuration.SetDebugServerEnabled",
      "link": "#configuration-set-debug-server-enabled",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Enable or disable the debug server.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Enable or disable the debug server.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-set-language",
      "label": "Configuration.SetLanguage",
      "link": "#configuration-set-language",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Use the locale property in the Handshake message instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Sets the server language to the given language. See also: \\\"GetAvailableLanguages\\\"\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"language\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Sets the server language to the given language. See also: \"GetAvailableLanguages\"",
      "deprecated": "Use the locale property in the Handshake message instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"language\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-set-mqtt-policy",
      "label": "Configuration.SetMqttPolicy",
      "link": "#configuration-set-mqtt-policy",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Configure a MQTT broker policy. If the ID is an existing one, the existing policy will be modified, otherwise a new one will be added.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"policy\"</span>: <span class=\"hljs-string\"><a href=\\\"#policy\\\">$ref:MqttPolicy</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Configure a MQTT broker policy. If the ID is an existing one, the existing policy will be modified, otherwise a new one will be added.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"policy\"</span>: <span class=\"hljs-string\"><a href=\\\"#policy\\\">$ref:MqttPolicy</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        },
        {
          "label": "<a href=\"#policy\">MqttPolicy</a>",
          "link": "#<a href=\"#policy\">-mqtt-policy</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-set-mqtt-server-configuration",
      "label": "Configuration.SetMqttServerConfiguration",
      "link": "#configuration-set-mqtt-server-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Configure a MQTT Server interface on the MQTT broker. If the ID is an existing one, the existing config will be modified, otherwise a new one will be added. Setting authenticationEnabled to true will require MQTT clients to use credentials set in the MQTT broker policies.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ServerConfiguration</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Configure a MQTT Server interface on the MQTT broker. If the ID is an existing one, the existing config will be modified, otherwise a new one will be added. Setting authenticationEnabled to true will require MQTT clients to use credentials set in the MQTT broker policies.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ServerConfiguration</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        },
        {
          "label": "<a href=\"#configuration\">ServerConfiguration</a>",
          "link": "#<a href=\"#configuration\">-server-configuration</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-set-server-name",
      "label": "Configuration.SetServerName",
      "link": "#configuration-set-server-name",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Set the name of the server. Default is nymea.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"serverName\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Set the name of the server. Default is nymea.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"serverName\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-set-tcp-server-configuration",
      "label": "Configuration.SetTcpServerConfiguration",
      "link": "#configuration-set-tcp-server-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Configure a TCP interface of the server. If the ID is an existing one, the existing config will be modified, otherwise a new one will be added. Note: if you are changing the configuration for the interface you are currently connected to, the connection will be dropped.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ServerConfiguration</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Configure a TCP interface of the server. If the ID is an existing one, the existing config will be modified, otherwise a new one will be added. Note: if you are changing the configuration for the interface you are currently connected to, the connection will be dropped.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ServerConfiguration</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        },
        {
          "label": "<a href=\"#configuration\">ServerConfiguration</a>",
          "link": "#<a href=\"#configuration\">-server-configuration</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-set-time-zone",
      "label": "Configuration.SetTimeZone",
      "link": "#configuration-set-time-zone",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Use System.SetTimeZone instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Set the time zone of the server. See also: \\\"GetTimeZones\\\"\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Set the time zone of the server. See also: \"GetTimeZones\"",
      "deprecated": "Use System.SetTimeZone instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-set-web-server-configuration",
      "label": "Configuration.SetWebServerConfiguration",
      "link": "#configuration-set-web-server-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Configure a WebServer interface of the server. If the ID is an existing one, the existing config will be modified, otherwise a new one will be added.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:WebServerConfiguration</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Configure a WebServer interface of the server. If the ID is an existing one, the existing config will be modified, otherwise a new one will be added.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:WebServerConfiguration</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        },
        {
          "label": "<a href=\"#configuration\">WebServerConfiguration</a>",
          "link": "#<a href=\"#configuration\">-web-server-configuration</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-set-web-socket-server-configuration",
      "label": "Configuration.SetWebSocketServerConfiguration",
      "link": "#configuration-set-web-socket-server-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Configure a WebSocket Server interface of the server. If the ID is an existing one, the existing config will be modified, otherwise a new one will be added. Note: if you are changing the configuration for the interface you are currently connected to, the connection will be dropped.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ServerConfiguration</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n  &#125;\n&#125;",
      "description": "Configure a WebSocket Server interface of the server. If the ID is an existing one, the existing config will be modified, otherwise a new one will be added. Note: if you are changing the configuration for the interface you are currently connected to, the connection will be dropped.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ServerConfiguration</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"configurationError\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration-error\\\">$ref:ConfigurationError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration-error\">ConfigurationError</a>",
          "link": "#<a href=\"#configuration-error\">-configuration-error</a>"
        },
        {
          "label": "<a href=\"#configuration\">ServerConfiguration</a>",
          "link": "#<a href=\"#configuration\">-server-configuration</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-add-configured-device",
      "label": "Devices.AddConfiguredDevice",
      "link": "#devices-add-configured-device",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Add a configured device with a setupMethod of SetupMethodJustAdd. For devices with a setupMethod different than SetupMethodJustAdd, use PairDevice. Devices with CreateMethodJustAdd require all parameters to be supplied here. Devices with CreateMethodDiscovery require the use of a deviceDescriptorId. For discovered devices params are not required and will be taken from the DeviceDescriptor, however, they may be overridden by supplying deviceParams.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:deviceDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:deviceParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:device-params\\\">$ref:ParamList</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Add a configured device with a setupMethod of SetupMethodJustAdd. For devices with a setupMethod different than SetupMethodJustAdd, use PairDevice. Devices with CreateMethodJustAdd require all parameters to be supplied here. Devices with CreateMethodDiscovery require the use of a deviceDescriptorId. For discovered devices params are not required and will be taken from the DeviceDescriptor, however, they may be overridden by supplying deviceParams.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:deviceDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:deviceParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:device-params\\\">$ref:ParamList</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:device-params\">ParamList</a>",
          "link": "#<a href=\"#o:device-params\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-browse-device",
      "label": "Devices.BrowseDevice",
      "link": "#devices-browse-device",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Browse a device. If a DeviceClass indicates a device is browsable, this method will return the BrowserItems. If no parameter besides the deviceId is used, the root node of this device will be returned. Any returned item which is browsable can be passed as node. Results will be children of the given node.\\nIn case of an error during browsing, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"items\"</span>: [\n      <span class=\"hljs-string\">\"$ref:BrowserItem\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Browse a device. If a DeviceClass indicates a device is browsable, this method will return the BrowserItems. If no parameter besides the deviceId is used, the root node of this device will be returned. Any returned item which is browsable can be passed as node. Results will be children of the given node.<br />In case of an error during browsing, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"items\"</span>: [\n    <span class=\"hljs-string\">\"$ref:BrowserItem\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "BrowserItem",
          "link": "#browser-item"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-confirm-pairing",
      "label": "Devices.ConfirmPairing",
      "link": "#devices-confirm-pairing",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Confirm an ongoing pairing. For SetupMethodUserAndPassword, provide the username in the \\\"username\\\" field and the password in the \\\"secret\\\" field. For SetupMethodEnterPin and provide the PIN in the \\\"secret\\\" field. In case of SetupMethodOAuth, the previously opened web view will eventually be redirected to http://128.0.0.1:8888 and the OAuth code as query parameters to this url. Provide the entire unmodified URL in the secret field.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:secret\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:username\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"pairingTransactionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Confirm an ongoing pairing. For SetupMethodUserAndPassword, provide the username in the \"username\" field and the password in the \"secret\" field. For SetupMethodEnterPin and provide the PIN in the \"secret\" field. In case of SetupMethodOAuth, the previously opened web view will eventually be redirected to http://128.0.0.1:8888 and the OAuth code as query parameters to this url. Provide the entire unmodified URL in the secret field.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:secret\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:username\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"pairingTransactionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-edit-device",
      "label": "Devices.EditDevice",
      "link": "#devices-edit-device",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Edit the name of a device. This method does not change the configuration of the device.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>\n  &#125;\n&#125;",
      "description": "Edit the name of a device. This method does not change the configuration of the device.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-execute-action",
      "label": "Devices.ExecuteAction",
      "link": "#devices-execute-action",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Execute a single action.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Execute a single action.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:params\">ParamList</a>",
          "link": "#<a href=\"#o:params\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-execute-browser-item",
      "label": "Devices.ExecuteBrowserItem",
      "link": "#devices-execute-browser-item",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Execute the item identified by itemId on the given device.\\nIn case of an error during execution, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Execute the item identified by itemId on the given device.<br />In case of an error during execution, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-execute-browser-item-action",
      "label": "Devices.ExecuteBrowserItemAction",
      "link": "#devices-execute-browser-item-action",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Execute the action for the browser item identified by actionTypeId and the itemId on the given device.\\nIn case of an error during execution, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Execute the action for the browser item identified by actionTypeId and the itemId on the given device.<br />In case of an error during execution, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:params\">ParamList</a>",
          "link": "#<a href=\"#o:params\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-action-types",
      "label": "Devices.GetActionTypes",
      "link": "#devices-get-action-types",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get action types for a specified deviceClassId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"actionTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#action-types\\\">$ref:ActionTypes</a></span>\n  &#125;\n&#125;",
      "description": "Get action types for a specified deviceClassId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"actionTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#action-types\\\">$ref:ActionTypes</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#action-types\">ActionTypes</a>",
          "link": "#<a href=\"#action-types\">-action-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-browser-item",
      "label": "Devices.GetBrowserItem",
      "link": "#devices-get-browser-item",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get a single item from the browser. This won't give any more info on an item than a regular browseDevice call, but it allows to fetch details of an item if only the ID is known.\\nIn case of an error during browsing, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:item\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:item\\\">$ref:BrowserItem</a></span>\n  &#125;\n&#125;",
      "description": "Get a single item from the browser. This won't give any more info on an item than a regular browseDevice call, but it allows to fetch details of an item if only the ID is known.<br />In case of an error during browsing, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:item\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:item\\\">$ref:BrowserItem</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:item\">BrowserItem</a>",
          "link": "#<a href=\"#o:item\">-browser-item</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-configured-devices",
      "label": "Devices.GetConfiguredDevices",
      "link": "#devices-get-configured-devices",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Returns a list of configured devices, optionally filtered by deviceId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"devices\"</span>: <span class=\"hljs-string\"><a href=\\\"#devices\\\">$ref:Devices</a></span>\n  &#125;\n&#125;",
      "description": "Returns a list of configured devices, optionally filtered by deviceId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"devices\"</span>: <span class=\"hljs-string\"><a href=\\\"#devices\\\">$ref:Devices</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#devices\">Devices</a>",
          "link": "#<a href=\"#devices\">-devices</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-discovered-devices",
      "label": "Devices.GetDiscoveredDevices",
      "link": "#devices-get-discovered-devices",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Performs a device discovery and returns the results. This function may take a while to return. Note that this method will include all the found devices, that is, including devices that already have been added. Those devices will have deviceId set to the device id of the already added device. Such results may be used to reconfigure existing devices and might be filtered in cases where only unknown devices are of interest.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:discoveryParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:discovery-params\\\">$ref:ParamList</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:deviceDescriptors\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:device-descriptors\\\">$ref:DeviceDescriptors</a></span>,\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Performs a device discovery and returns the results. This function may take a while to return. Note that this method will include all the found devices, that is, including devices that already have been added. Those devices will have deviceId set to the device id of the already added device. Such results may be used to reconfigure existing devices and might be filtered in cases where only unknown devices are of interest.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:discoveryParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:discovery-params\\\">$ref:ParamList</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:deviceDescriptors\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:device-descriptors\\\">$ref:DeviceDescriptors</a></span>,\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:device-descriptors\">DeviceDescriptors</a>",
          "link": "#<a href=\"#o:device-descriptors\">-device-descriptors</a>"
        },
        {
          "label": "<a href=\"#o:discovery-params\">ParamList</a>",
          "link": "#<a href=\"#o:discovery-params\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-event-types",
      "label": "Devices.GetEventTypes",
      "link": "#devices-get-event-types",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get event types for a specified deviceClassId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"eventTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#event-types\\\">$ref:EventTypes</a></span>\n  &#125;\n&#125;",
      "description": "Get event types for a specified deviceClassId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"eventTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#event-types\\\">$ref:EventTypes</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#event-types\">EventTypes</a>",
          "link": "#<a href=\"#event-types\">-event-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-plugin-configuration",
      "label": "Devices.GetPluginConfiguration",
      "link": "#devices-get-plugin-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get a plugin's params.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:configuration\\\">$ref:ParamList</a></span>\n  &#125;\n&#125;",
      "description": "Get a plugin's params.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:configuration\\\">$ref:ParamList</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:configuration\">ParamList</a>",
          "link": "#<a href=\"#o:configuration\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-plugins",
      "label": "Devices.GetPlugins",
      "link": "#devices-get-plugins",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Returns a list of loaded plugins.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"plugins\"</span>: <span class=\"hljs-string\"><a href=\\\"#plugins\\\">$ref:DevicePlugins</a></span>\n  &#125;\n&#125;",
      "description": "Returns a list of loaded plugins.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"plugins\"</span>: <span class=\"hljs-string\"><a href=\\\"#plugins\\\">$ref:DevicePlugins</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#plugins\">DevicePlugins</a>",
          "link": "#<a href=\"#plugins\">-device-plugins</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-state-types",
      "label": "Devices.GetStateTypes",
      "link": "#devices-get-state-types",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get state types for a specified deviceClassId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"stateTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#state-types\\\">$ref:StateTypes</a></span>\n  &#125;\n&#125;",
      "description": "Get state types for a specified deviceClassId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"stateTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#state-types\\\">$ref:StateTypes</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#state-types\">StateTypes</a>",
          "link": "#<a href=\"#state-types\">-state-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-state-value",
      "label": "Devices.GetStateValue",
      "link": "#devices-get-state-value",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the value of the given device and the given stateType\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n  &#125;\n&#125;",
      "description": "Get the value of the given device and the given stateType",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-state-values",
      "label": "Devices.GetStateValues",
      "link": "#devices-get-state-values",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get all the state values of the given device.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:values\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:values\\\">$ref:States</a></span>\n  &#125;\n&#125;",
      "description": "Get all the state values of the given device.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:values\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:values\\\">$ref:States</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:values\">States</a>",
          "link": "#<a href=\"#o:values\">-states</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-supported-devices",
      "label": "Devices.GetSupportedDevices",
      "link": "#devices-get-supported-devices",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Returns a list of supported Device classes, optionally filtered by vendorId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:vendorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceClasses\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-classes\\\">$ref:DeviceClasses</a></span>\n  &#125;\n&#125;",
      "description": "Returns a list of supported Device classes, optionally filtered by vendorId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:vendorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceClasses\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-classes\\\">$ref:DeviceClasses</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-classes\">DeviceClasses</a>",
          "link": "#<a href=\"#device-classes\">-device-classes</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-get-supported-vendors",
      "label": "Devices.GetSupportedVendors",
      "link": "#devices-get-supported-vendors",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Returns a list of supported Vendors.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"vendors\"</span>: <span class=\"hljs-string\"><a href=\\\"#vendors\\\">$ref:Vendors</a></span>\n  &#125;\n&#125;",
      "description": "Returns a list of supported Vendors.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"vendors\"</span>: <span class=\"hljs-string\"><a href=\\\"#vendors\\\">$ref:Vendors</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#vendors\">Vendors</a>",
          "link": "#<a href=\"#vendors\">-vendors</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-pair-device",
      "label": "Devices.PairDevice",
      "link": "#devices-pair-device",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Pair a device. Use this to set up or reconfigure devices for DeviceClasses with a setupMethod different than SetupMethodJustAdd. Depending on the CreateMethod and whether a new devices is set up or an existing one is reconfigured, different parameters are required:\\nCreateMethodJustAdd takes the deviceClassId and the parameters to be used with that device. If an existing device should be reconfigured, the deviceId of said device should be given additionally.\\nCreateMethodDiscovery requires the use of a deviceDescriptorId, previously obtained with DiscoverDevices. Optionally, parameters can be overridden with the give deviceParams. DeviceDescriptors containing a deviceId will reconfigure that device, descriptors without deviceId will add a new one.\\nIf success is true, the return values will contain a pairingTransactionId, a displayMessage and the setupMethod. Depending on the setupMethod, the application should present the use an appropriate login mask, that is, For SetupMethodDisplayPin the user should enter a pin that is displayed on the device, for SetupMethodEnterPin the application should present the given PIN so the user can enter it on the device. For SetupMethodPushButton, the displayMessage shall be presented to the user as informational hints to press a button on the device. For SetupMethodUserAndPassword a login mask for a user and password login should be presented to the user. In case of SetupMethodOAuth, an OAuth URL will be returned which shall be opened in a web view to allow the user logging in.\\nOnce the login procedure has completed, the application shall proceed with ConfirmPairing, providing the results of the pairing procedure.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:deviceDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:deviceParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:device-params\\\">$ref:ParamList</a></span>,\n    <span class=\"hljs-attr\">\"o:name\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:oAuthUrl\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:pairingTransactionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:pin\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:setupMethod\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:setup-method\\\">$ref:SetupMethod</a></span>\n  &#125;\n&#125;",
      "description": "Pair a device. Use this to set up or reconfigure devices for DeviceClasses with a setupMethod different than SetupMethodJustAdd. Depending on the CreateMethod and whether a new devices is set up or an existing one is reconfigured, different parameters are required:<br />CreateMethodJustAdd takes the deviceClassId and the parameters to be used with that device. If an existing device should be reconfigured, the deviceId of said device should be given additionally.\nCreateMethodDiscovery requires the use of a deviceDescriptorId, previously obtained with DiscoverDevices. Optionally, parameters can be overridden with the give deviceParams. DeviceDescriptors containing a deviceId will reconfigure that device, descriptors without deviceId will add a new one.\nIf success is true, the return values will contain a pairingTransactionId, a displayMessage and the setupMethod. Depending on the setupMethod, the application should present the use an appropriate login mask, that is, For SetupMethodDisplayPin the user should enter a pin that is displayed on the device, for SetupMethodEnterPin the application should present the given PIN so the user can enter it on the device. For SetupMethodPushButton, the displayMessage shall be presented to the user as informational hints to press a button on the device. For SetupMethodUserAndPassword a login mask for a user and password login should be presented to the user. In case of SetupMethodOAuth, an OAuth URL will be returned which shall be opened in a web view to allow the user logging in.\nOnce the login procedure has completed, the application shall proceed with ConfirmPairing, providing the results of the pairing procedure.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:deviceDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:deviceParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:device-params\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"o:name\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:oAuthUrl\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:pairingTransactionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:pin\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:setupMethod\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:setup-method\\\">$ref:SetupMethod</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:device-params\">ParamList</a>",
          "link": "#<a href=\"#o:device-params\">-param-list</a>"
        },
        {
          "label": "<a href=\"#o:setup-method\">SetupMethod</a>",
          "link": "#<a href=\"#o:setup-method\">-setup-method</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-reconfigure-device",
      "label": "Devices.ReconfigureDevice",
      "link": "#devices-reconfigure-device",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Reconfigure a device. This comes down to removing and recreating a device with new parameters but keeping its device id the same (and with that keeping rules, tags etc). For devices with create method CreateMethodDiscovery, a discovery (GetDiscoveredDevices) shall be performed first and this method is to be called with a deviceDescriptorId of the re-discovered device instead of the deviceId directly. Device parameters will be taken from the discovery, but can be overridden individually here by providing them in the deviceParams parameter. Only writable parameters can be changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:deviceDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:deviceParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:device-params\\\">$ref:ParamList</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Reconfigure a device. This comes down to removing and recreating a device with new parameters but keeping its device id the same (and with that keeping rules, tags etc). For devices with create method CreateMethodDiscovery, a discovery (GetDiscoveredDevices) shall be performed first and this method is to be called with a deviceDescriptorId of the re-discovered device instead of the deviceId directly. Device parameters will be taken from the discovery, but can be overridden individually here by providing them in the deviceParams parameter. Only writable parameters can be changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:deviceDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:deviceParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:device-params\\\">$ref:ParamList</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:device-params\">ParamList</a>",
          "link": "#<a href=\"#o:device-params\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-remove-configured-device",
      "label": "Devices.RemoveConfiguredDevice",
      "link": "#devices-remove-configured-device",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Remove a device from the system.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:removePolicy\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:remove-policy\\\">$ref:RemovePolicy</a></span>,\n    <span class=\"hljs-attr\">\"o:removePolicyList\"</span>: [\n      &#123;\n        <span class=\"hljs-attr\">\"policy\"</span>: <span class=\"hljs-string\">\"$ref:RemovePolicy\"</span>,\n        <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n      &#125;\n    ]\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:ruleIds\"</span>: [\n      <span class=\"hljs-string\">\"Uuid\"</span>\n    ]\n  &#125;\n&#125;",
      "description": "Remove a device from the system.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:removePolicy\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:remove-policy\\\">$ref:RemovePolicy</a></span>,\n  <span class=\"hljs-attr\">\"o:removePolicyList\"</span>: [\n    &#123;\n      <span class=\"hljs-attr\">\"policy\"</span>: <span class=\"hljs-string\">\"$ref:RemovePolicy\"</span>,\n      <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n    &#125;\n  ]\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:ruleIds\"</span>: [\n    <span class=\"hljs-string\">\"Uuid\"</span>\n  ]\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:remove-policy\">RemovePolicy</a>",
          "link": "#<a href=\"#o:remove-policy\">-remove-policy</a>"
        },
        {
          "label": "RemovePolicy",
          "link": "#remove-policy"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-set-device-settings",
      "label": "Devices.SetDeviceSettings",
      "link": "#devices-set-device-settings",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Change the settings of a device.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"settings\"</span>: <span class=\"hljs-string\"><a href=\\\"#settings\\\">$ref:ParamList</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>\n  &#125;\n&#125;",
      "description": "Change the settings of a device.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"settings\"</span>: <span class=\"hljs-string\"><a href=\\\"#settings\\\">$ref:ParamList</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#settings\">ParamList</a>",
          "link": "#<a href=\"#settings\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-set-plugin-configuration",
      "label": "Devices.SetPluginConfiguration",
      "link": "#devices-set-plugin-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Set a plugin's params.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ParamList</a></span>,\n    <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>\n  &#125;\n&#125;",
      "description": "Set a plugin's params.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration\">ParamList</a>",
          "link": "#<a href=\"#configuration\">-param-list</a>"
        },
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "events-get-event-type",
      "label": "Events.GetEventType",
      "link": "#events-get-event-type",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Please use the Devices namespace instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the EventType for the given eventTypeId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"eventTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:eventType\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:event-type\\\">$ref:EventType</a></span>\n  &#125;\n&#125;",
      "description": "Get the EventType for the given eventTypeId.",
      "deprecated": "Please use the Devices namespace instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"eventTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:eventType\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:event-type\\\">$ref:EventType</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:event-type\">EventType</a>",
          "link": "#<a href=\"#o:event-type\">-event-type</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-add-thing",
      "label": "Integrations.AddThing",
      "link": "#integrations-add-thing",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Add a new thing to the system. Only things with a setupMethod of SetupMethodJustAdd can be added this way. For things with a setupMethod different than SetupMethodJustAdd, use PairThing. Things with CreateMethodJustAdd require all parameters to be supplied here. Things with CreateMethodDiscovery require the use of a thingDescriptorId. For discovered things, params are not required and will be taken from the ThingDescriptor, however, they may be overridden by supplying thingParams.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:thingDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:thingParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:thing-params\\\">$ref:ParamList</a></span>,\n    <span class=\"hljs-attr\">\"thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Add a new thing to the system. Only things with a setupMethod of SetupMethodJustAdd can be added this way. For things with a setupMethod different than SetupMethodJustAdd, use PairThing. Things with CreateMethodJustAdd require all parameters to be supplied here. Things with CreateMethodDiscovery require the use of a thingDescriptorId. For discovered things, params are not required and will be taken from the ThingDescriptor, however, they may be overridden by supplying thingParams.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:thingDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:thingParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:thing-params\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:thing-params\">ParamList</a>",
          "link": "#<a href=\"#o:thing-params\">-param-list</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-browse-thing",
      "label": "Integrations.BrowseThing",
      "link": "#integrations-browse-thing",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Browse a thing. If a ThingClass indicates a thing is browsable, this method will return the BrowserItems. If no parameter besides the thingId is used, the root node of this thingwill be returned. Any returned item which is browsable can be passed as node. Results will be children of the given node.\\nIn case of an error during browsing, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"items\"</span>: [\n      <span class=\"hljs-string\">\"$ref:BrowserItem\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Browse a thing. If a ThingClass indicates a thing is browsable, this method will return the BrowserItems. If no parameter besides the thingId is used, the root node of this thingwill be returned. Any returned item which is browsable can be passed as node. Results will be children of the given node.<br />In case of an error during browsing, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"items\"</span>: [\n    <span class=\"hljs-string\">\"$ref:BrowserItem\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        },
        {
          "label": "BrowserItem",
          "link": "#browser-item"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-confirm-pairing",
      "label": "Integrations.ConfirmPairing",
      "link": "#integrations-confirm-pairing",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Confirm an ongoing pairing. For SetupMethodUserAndPassword, provide the username in the \\\"username\\\" field and the password in the \\\"secret\\\" field. For SetupMethodEnterPin and provide the PIN in the \\\"secret\\\" field. In case of SetupMethodOAuth, the previously opened web view will eventually be redirected to http://128.0.0.1:8888 and the OAuth code as query parameters to this url. Provide the entire unmodified URL in the secret field.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:secret\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:username\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"pairingTransactionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Confirm an ongoing pairing. For SetupMethodUserAndPassword, provide the username in the \"username\" field and the password in the \"secret\" field. For SetupMethodEnterPin and provide the PIN in the \"secret\" field. In case of SetupMethodOAuth, the previously opened web view will eventually be redirected to http://128.0.0.1:8888 and the OAuth code as query parameters to this url. Provide the entire unmodified URL in the secret field.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:secret\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:username\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"pairingTransactionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-connectio",
      "label": "Integrations.ConnectIO",
      "link": "#integrations-connectio",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Connect two generic IO states. Input and output need to be compatible, that is, either a digital input and a digital output, or an analog input and an analog output. If successful, the connectionId will be returned.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"inputStateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"inputThingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:inverted\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"outputStateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"outputThingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:ioConnectionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Connect two generic IO states. Input and output need to be compatible, that is, either a digital input and a digital output, or an analog input and an analog output. If successful, the connectionId will be returned.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"inputStateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"inputThingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:inverted\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"outputStateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"outputThingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:ioConnectionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-disconnectio",
      "label": "Integrations.DisconnectIO",
      "link": "#integrations-disconnectio",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Disconnect an existing IO connection.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ioConnectionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Disconnect an existing IO connection.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"ioConnectionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-discover-things",
      "label": "Integrations.DiscoverThings",
      "link": "#integrations-discover-things",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Performs a thing discovery for things of the given thingClassId and returns the results. This function may take a while to return. Note that this method will include all the found things, that is, including things that may already have been added. Those things will have thingId set to the id of the already added thing. Such results may be used to reconfigure existing things and might be filtered in cases where only unknown things are of interest.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:discoveryParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:discovery-params\\\">$ref:ParamList</a></span>,\n    <span class=\"hljs-attr\">\"thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:thingDescriptors\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:thing-descriptors\\\">$ref:ThingDescriptors</a></span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Performs a thing discovery for things of the given thingClassId and returns the results. This function may take a while to return. Note that this method will include all the found things, that is, including things that may already have been added. Those things will have thingId set to the id of the already added thing. Such results may be used to reconfigure existing things and might be filtered in cases where only unknown things are of interest.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:discoveryParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:discovery-params\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:thingDescriptors\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:thing-descriptors\\\">$ref:ThingDescriptors</a></span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:discovery-params\">ParamList</a>",
          "link": "#<a href=\"#o:discovery-params\">-param-list</a>"
        },
        {
          "label": "<a href=\"#o:thing-descriptors\">ThingDescriptors</a>",
          "link": "#<a href=\"#o:thing-descriptors\">-thing-descriptors</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-edit-thing",
      "label": "Integrations.EditThing",
      "link": "#integrations-edit-thing",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Edit the name of a thing.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Edit the name of a thing.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-execute-action",
      "label": "Integrations.ExecuteAction",
      "link": "#integrations-execute-action",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Execute a single action.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>,\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Execute a single action.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:params\">ParamList</a>",
          "link": "#<a href=\"#o:params\">-param-list</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-execute-browser-item",
      "label": "Integrations.ExecuteBrowserItem",
      "link": "#integrations-execute-browser-item",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Execute the item identified by itemId on the given thing.\\nIn case of an error during execution, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Execute the item identified by itemId on the given thing.<br />In case of an error during execution, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-execute-browser-item-action",
      "label": "Integrations.ExecuteBrowserItemAction",
      "link": "#integrations-execute-browser-item-action",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Execute the action for the browser item identified by actionTypeId and the itemId on the given thing.\\nIn case of an error during execution, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>,\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Execute the action for the browser item identified by actionTypeId and the itemId on the given thing.<br />In case of an error during execution, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:params\">ParamList</a>",
          "link": "#<a href=\"#o:params\">-param-list</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-get-action-types",
      "label": "Integrations.GetActionTypes",
      "link": "#integrations-get-action-types",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get action types for a specified thingClassId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"actionTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#action-types\\\">$ref:ActionTypes</a></span>\n  &#125;\n&#125;",
      "description": "Get action types for a specified thingClassId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"actionTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#action-types\\\">$ref:ActionTypes</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#action-types\">ActionTypes</a>",
          "link": "#<a href=\"#action-types\">-action-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-get-browser-item",
      "label": "Integrations.GetBrowserItem",
      "link": "#integrations-get-browser-item",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get a single item from the browser. This won't give any more info on an item than a regular BrowseThing call, but it allows to fetch details of an item if only the ID is known.\\nIn case of an error during browsing, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:item\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:item\\\">$ref:BrowserItem</a></span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Get a single item from the browser. This won't give any more info on an item than a regular BrowseThing call, but it allows to fetch details of an item if only the ID is known.<br />In case of an error during browsing, the error will be indicated and the displayMessage may contain additional information for the user. The displayMessage will be translated. A client UI showing this message to the user should be prepared for empty, but also longer strings.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:itemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:item\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:item\\\">$ref:BrowserItem</a></span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:item\">BrowserItem</a>",
          "link": "#<a href=\"#o:item\">-browser-item</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-get-event-types",
      "label": "Integrations.GetEventTypes",
      "link": "#integrations-get-event-types",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get event types for a specified thingClassId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"eventTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#event-types\\\">$ref:EventTypes</a></span>\n  &#125;\n&#125;",
      "description": "Get event types for a specified thingClassId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"eventTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#event-types\\\">$ref:EventTypes</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#event-types\">EventTypes</a>",
          "link": "#<a href=\"#event-types\">-event-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-getio-connections",
      "label": "Integrations.GetIOConnections",
      "link": "#integrations-getio-connections",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Fetch IO connections. Optionally filtered by thingId and stateTypeId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ioConnections\"</span>: <span class=\"hljs-string\"><a href=\\\"#io-connections\\\">$ref:IOConnections</a></span>\n  &#125;\n&#125;",
      "description": "Fetch IO connections. Optionally filtered by thingId and stateTypeId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"ioConnections\"</span>: <span class=\"hljs-string\"><a href=\\\"#io-connections\\\">$ref:IOConnections</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#io-connections\">IOConnections</a>",
          "link": "#<a href=\"#io-connections\">io-connections</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-get-plugin-configuration",
      "label": "Integrations.GetPluginConfiguration",
      "link": "#integrations-get-plugin-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get a plugin's params.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:configuration\\\">$ref:ParamList</a></span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Get a plugin's params.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:configuration\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:configuration\">ParamList</a>",
          "link": "#<a href=\"#o:configuration\">-param-list</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-get-plugins",
      "label": "Integrations.GetPlugins",
      "link": "#integrations-get-plugins",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Returns a list of loaded plugins.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"plugins\"</span>: <span class=\"hljs-string\"><a href=\\\"#plugins\\\">$ref:IntegrationPlugins</a></span>\n  &#125;\n&#125;",
      "description": "Returns a list of loaded plugins.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"plugins\"</span>: <span class=\"hljs-string\"><a href=\\\"#plugins\\\">$ref:IntegrationPlugins</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#plugins\">IntegrationPlugins</a>",
          "link": "#<a href=\"#plugins\">-integration-plugins</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-get-state-types",
      "label": "Integrations.GetStateTypes",
      "link": "#integrations-get-state-types",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get state types for a specified thingClassId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"stateTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#state-types\\\">$ref:StateTypes</a></span>\n  &#125;\n&#125;",
      "description": "Get state types for a specified thingClassId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"stateTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#state-types\\\">$ref:StateTypes</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#state-types\">StateTypes</a>",
          "link": "#<a href=\"#state-types\">-state-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-get-state-value",
      "label": "Integrations.GetStateValue",
      "link": "#integrations-get-state-value",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the value of the given thing and the given stateType\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Get the value of the given thing and the given stateType",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-get-state-values",
      "label": "Integrations.GetStateValues",
      "link": "#integrations-get-state-values",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get all the state values of the given thing.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:values\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:values\\\">$ref:States</a></span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Get all the state values of the given thing.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:values\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:values\\\">$ref:States</a></span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:values\">States</a>",
          "link": "#<a href=\"#o:values\">-states</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-get-thing-classes",
      "label": "Integrations.GetThingClasses",
      "link": "#integrations-get-thing-classes",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Returns a list of supported thing classes, optionally filtered by vendorId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:vendorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:thingClasses\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:thing-classes\\\">$ref:ThingClasses</a></span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Returns a list of supported thing classes, optionally filtered by vendorId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:vendorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:thingClasses\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:thing-classes\\\">$ref:ThingClasses</a></span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:thing-classes\">ThingClasses</a>",
          "link": "#<a href=\"#o:thing-classes\">-thing-classes</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-get-things",
      "label": "Integrations.GetThings",
      "link": "#integrations-get-things",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Returns a list of configured things, optionally filtered by thingId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:things\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:things\\\">$ref:Things</a></span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Returns a list of configured things, optionally filtered by thingId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:things\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:things\\\">$ref:Things</a></span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:things\">Things</a>",
          "link": "#<a href=\"#o:things\">-things</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-get-vendors",
      "label": "Integrations.GetVendors",
      "link": "#integrations-get-vendors",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Returns a list of supported Vendors.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"vendors\"</span>: <span class=\"hljs-string\"><a href=\\\"#vendors\\\">$ref:Vendors</a></span>\n  &#125;\n&#125;",
      "description": "Returns a list of supported Vendors.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"vendors\"</span>: <span class=\"hljs-string\"><a href=\\\"#vendors\\\">$ref:Vendors</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#vendors\">Vendors</a>",
          "link": "#<a href=\"#vendors\">-vendors</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-pair-thing",
      "label": "Integrations.PairThing",
      "link": "#integrations-pair-thing",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Pair a new thing. Use this to set up or reconfigure things for ThingClasses with a setupMethod different than SetupMethodJustAdd. Depending on the CreateMethod and whether a new thing is set up or an existing one is reconfigured, different parameters are required:\\nCreateMethodJustAdd takes the thingClassId and the parameters you want to have with that thing. If an existing thing should be reconfigured, the thingId of said thing should be given additionally.\\nCreateMethodDiscovery requires the use of a thingDescriptorId, previously obtained with DiscoverThings. Optionally, parameters can be overridden with the give thingParams. ThingDescriptors containing a thingId will reconfigure an existing thing, descriptors without a thingId will add a new thing to the system.\\nIf success is true, the return values will contain a pairingTransactionId, a displayMessage and the setupMethod. Depending on the setupMethod, the application should present the use an appropriate login mask, that is, For SetupMethodDisplayPin the user should enter a pin that is displayed on the device or online service, for SetupMethodEnterPin the application should present the given PIN so the user can enter it on the device or online service. For SetupMethodPushButton, the displayMessage shall be presented to the user as informational hints to press a button on the device. For SetupMethodUserAndPassword a login mask for a user and password login should be presented to the user. In case of SetupMethodOAuth, an OAuth URL will be returned which shall be opened in a web view to allow the user logging in.\\nOnce the login procedure has completed, the application shall proceed with ConfirmPairing, providing the results of the pairing procedure.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:thingDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:thingParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:thing-params\\\">$ref:ParamList</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:oAuthUrl\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:pairingTransactionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:pin\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:setupMethod\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:setup-method\\\">$ref:SetupMethod</a></span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Pair a new thing. Use this to set up or reconfigure things for ThingClasses with a setupMethod different than SetupMethodJustAdd. Depending on the CreateMethod and whether a new thing is set up or an existing one is reconfigured, different parameters are required:<br />CreateMethodJustAdd takes the thingClassId and the parameters you want to have with that thing. If an existing thing should be reconfigured, the thingId of said thing should be given additionally.\nCreateMethodDiscovery requires the use of a thingDescriptorId, previously obtained with DiscoverThings. Optionally, parameters can be overridden with the give thingParams. ThingDescriptors containing a thingId will reconfigure an existing thing, descriptors without a thingId will add a new thing to the system.\nIf success is true, the return values will contain a pairingTransactionId, a displayMessage and the setupMethod. Depending on the setupMethod, the application should present the use an appropriate login mask, that is, For SetupMethodDisplayPin the user should enter a pin that is displayed on the device or online service, for SetupMethodEnterPin the application should present the given PIN so the user can enter it on the device or online service. For SetupMethodPushButton, the displayMessage shall be presented to the user as informational hints to press a button on the device. For SetupMethodUserAndPassword a login mask for a user and password login should be presented to the user. In case of SetupMethodOAuth, an OAuth URL will be returned which shall be opened in a web view to allow the user logging in.\nOnce the login procedure has completed, the application shall proceed with ConfirmPairing, providing the results of the pairing procedure.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:thingDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:thingParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:thing-params\\\">$ref:ParamList</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:oAuthUrl\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:pairingTransactionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:pin\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:setupMethod\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:setup-method\\\">$ref:SetupMethod</a></span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:setup-method\">SetupMethod</a>",
          "link": "#<a href=\"#o:setup-method\">-setup-method</a>"
        },
        {
          "label": "<a href=\"#o:thing-params\">ParamList</a>",
          "link": "#<a href=\"#o:thing-params\">-param-list</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-reconfigure-thing",
      "label": "Integrations.ReconfigureThing",
      "link": "#integrations-reconfigure-thing",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Reconfigure a thing. This comes down to removing and recreating a thing with new parameters but keeping its thing id the same (and with that keeping rules, tags etc). For things with create method CreateMethodDiscovery, a discovery (DiscoverThings) shall be performed first and this method is to be called with a thingDescriptorId of the re-discovered thing instead of the thingId directly. Thing parameters will be taken from the discovery, but can be overridden individually here by providing them in the thingParams parameter. Only writable parameters can be changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:thingDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:thingParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:thing-params\\\">$ref:ParamList</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Reconfigure a thing. This comes down to removing and recreating a thing with new parameters but keeping its thing id the same (and with that keeping rules, tags etc). For things with create method CreateMethodDiscovery, a discovery (DiscoverThings) shall be performed first and this method is to be called with a thingDescriptorId of the re-discovered thing instead of the thingId directly. Thing parameters will be taken from the discovery, but can be overridden individually here by providing them in the thingParams parameter. Only writable parameters can be changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:thingDescriptorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:thingParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:thing-params\\\">$ref:ParamList</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:displayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:thing-params\">ParamList</a>",
          "link": "#<a href=\"#o:thing-params\">-param-list</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-remove-thing",
      "label": "Integrations.RemoveThing",
      "link": "#integrations-remove-thing",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Remove a thing from the system.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:removePolicy\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:remove-policy\\\">$ref:RemovePolicy</a></span>,\n    <span class=\"hljs-attr\">\"o:removePolicyList\"</span>: [\n      &#123;\n        <span class=\"hljs-attr\">\"policy\"</span>: <span class=\"hljs-string\">\"$ref:RemovePolicy\"</span>,\n        <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n      &#125;\n    ],\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:ruleIds\"</span>: [\n      <span class=\"hljs-string\">\"Uuid\"</span>\n    ],\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Remove a thing from the system.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:removePolicy\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:remove-policy\\\">$ref:RemovePolicy</a></span>,\n  <span class=\"hljs-attr\">\"o:removePolicyList\"</span>: [\n    &#123;\n      <span class=\"hljs-attr\">\"policy\"</span>: <span class=\"hljs-string\">\"$ref:RemovePolicy\"</span>,\n      <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n    &#125;\n  ],\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:ruleIds\"</span>: [\n    <span class=\"hljs-string\">\"Uuid\"</span>\n  ],\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:remove-policy\">RemovePolicy</a>",
          "link": "#<a href=\"#o:remove-policy\">-remove-policy</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        },
        {
          "label": "RemovePolicy",
          "link": "#remove-policy"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-set-plugin-configuration",
      "label": "Integrations.SetPluginConfiguration",
      "link": "#integrations-set-plugin-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Set a plugin's params.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ParamList</a></span>,\n    <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Set a plugin's params.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#configuration\">ParamList</a>",
          "link": "#<a href=\"#configuration\">-param-list</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-set-thing-settings",
      "label": "Integrations.SetThingSettings",
      "link": "#integrations-set-thing-settings",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Change the settings of a thing.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"settings\"</span>: <span class=\"hljs-string\"><a href=\\\"#settings\\\">$ref:ParamList</a></span>,\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n  &#125;\n&#125;",
      "description": "Change the settings of a thing.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"settings\"</span>: <span class=\"hljs-string\"><a href=\\\"#settings\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"thingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing-error\\\">$ref:ThingError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#settings\">ParamList</a>",
          "link": "#<a href=\"#settings\">-param-list</a>"
        },
        {
          "label": "<a href=\"#thing-error\">ThingError</a>",
          "link": "#<a href=\"#thing-error\">-thing-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-authenticate",
      "label": "JSONRPC.Authenticate",
      "link": "#jsonrpc-authenticate",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Use Users.Authenticate instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Authenticate a client to the api via user &amp; password challenge. Provide a device name which allows the user to identify the client and revoke the token in case the device is lost or stolen. This will return a new token to be used to authorize a client at the API.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"username\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:token\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Authenticate a client to the api via user & password challenge. Provide a device name which allows the user to identify the client and revoke the token in case the device is lost or stolen. This will return a new token to be used to authorize a client at the API.",
      "deprecated": "Use Users.Authenticate instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"username\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:token\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-create-user",
      "label": "JSONRPC.CreateUser",
      "link": "#jsonrpc-create-user",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Use Users.CreateUser instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Create a new user in the API. Currently this is only allowed to be called once when a new nymea instance is set up. Call Authenticate after this to obtain a device token for this user.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"username\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>\n  &#125;\n&#125;",
      "description": "Create a new user in the API. Currently this is only allowed to be called once when a new nymea instance is set up. Call Authenticate after this to obtain a device token for this user.",
      "deprecated": "Use Users.CreateUser instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"username\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#error\">UserError</a>",
          "link": "#<a href=\"#error\">-user-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-hello",
      "label": "JSONRPC.Hello",
      "link": "#jsonrpc-hello",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Initiates a connection. Use this method to perform an initial handshake of the connection. Optionally, a parameter \\\"locale\\\" is can be passed to set up the used locale for this connection. Strings such as ThingClass displayNames etc will be localized to this locale. If this parameter is omitted, the default system locale (depending on the configuration) is used. The reply of this method contains information about this core instance such as version information, uuid and its name. The locale valueindicates the locale used for this connection. Note: This method can be called multiple times. The locale used in the last call for this connection will be used. Other values, like initialSetupRequired might change if the setup has been performed in the meantime.\\n The field cacheHashes may contain a map of methods and MD5 hashes. As long as the hash for a method does not change, a client may use a previously cached copy of the call instead of fetching the content again.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:locale\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"authenticationRequired\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"initialSetupRequired\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"language\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"locale\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:cacheHashes\"</span>: [\n      <span class=\"hljs-string\">\"$ref:CacheHash\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:experiences\"</span>: [\n      <span class=\"hljs-string\">\"$ref:Experience\"</span>\n    ],\n    <span class=\"hljs-attr\">\"protocol version\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"pushButtonAuthAvailable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"server\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"uuid\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"version\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Initiates a connection. Use this method to perform an initial handshake of the connection. Optionally, a parameter \"locale\" is can be passed to set up the used locale for this connection. Strings such as ThingClass displayNames etc will be localized to this locale. If this parameter is omitted, the default system locale (depending on the configuration) is used. The reply of this method contains information about this core instance such as version information, uuid and its name. The locale valueindicates the locale used for this connection. Note: This method can be called multiple times. The locale used in the last call for this connection will be used. Other values, like initialSetupRequired might change if the setup has been performed in the meantime.<br /> The field cacheHashes may contain a map of methods and MD5 hashes. As long as the hash for a method does not change, a client may use a previously cached copy of the call instead of fetching the content again.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:locale\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"authenticationRequired\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"initialSetupRequired\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"language\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"locale\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:cacheHashes\"</span>: [\n    <span class=\"hljs-string\">\"$ref:CacheHash\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:experiences\"</span>: [\n    <span class=\"hljs-string\">\"$ref:Experience\"</span>\n  ],\n  <span class=\"hljs-attr\">\"protocol version\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"pushButtonAuthAvailable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"server\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"uuid\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"version\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [
        {
          "label": "CacheHash",
          "link": "#cache-hash"
        },
        {
          "label": "Experience",
          "link": "#experience"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-introspect",
      "label": "JSONRPC.Introspect",
      "link": "#jsonrpc-introspect",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Introspect this API.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"methods\"</span>: <span class=\"hljs-string\">\"Object\"</span>,\n    <span class=\"hljs-attr\">\"notifications\"</span>: <span class=\"hljs-string\">\"Object\"</span>,\n    <span class=\"hljs-attr\">\"types\"</span>: <span class=\"hljs-string\">\"Object\"</span>\n  &#125;\n&#125;",
      "description": "Introspect this API.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"methods\"</span>: <span class=\"hljs-string\">\"Object\"</span>,\n  <span class=\"hljs-attr\">\"notifications\"</span>: <span class=\"hljs-string\">\"Object\"</span>,\n  <span class=\"hljs-attr\">\"types\"</span>: <span class=\"hljs-string\">\"Object\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-is-cloud-connected",
      "label": "JSONRPC.IsCloudConnected",
      "link": "#jsonrpc-is-cloud-connected",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Check whether the cloud is currently connected. \\\"connected\\\" will be true whenever connectionState equals CloudConnectionStateConnected and is deprecated. Please use the connectionState value instead.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"connectionState\"</span>: <span class=\"hljs-string\"><a href=\\\"#connection-state\\\">$ref:CloudConnectionState</a></span>,\n    <span class=\"hljs-attr\">\"d:connected\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Check whether the cloud is currently connected. \"connected\" will be true whenever connectionState equals CloudConnectionStateConnected and is deprecated. Please use the connectionState value instead.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"connectionState\"</span>: <span class=\"hljs-string\"><a href=\\\"#connection-state\\\">$ref:CloudConnectionState</a></span>,\n  <span class=\"hljs-attr\">\"d:connected\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#connection-state\">CloudConnectionState</a>",
          "link": "#<a href=\"#connection-state\">-cloud-connection-state</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-keep-alive",
      "label": "JSONRPC.KeepAlive",
      "link": "#jsonrpc-keep-alive",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"This is basically a Ping/Pong mechanism a client app may use to check server connectivity. Currently, the server does not actually do anything with this information and will return the call providing the given sessionId back to the caller. It is up to the client whether to use this or not and not required by the server to keep the connection alive.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"sessionId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"sessionId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "This is basically a Ping/Pong mechanism a client app may use to check server connectivity. Currently, the server does not actually do anything with this information and will return the call providing the given sessionId back to the caller. It is up to the client whether to use this or not and not required by the server to keep the connection alive.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"sessionId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"sessionId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-remove-token",
      "label": "JSONRPC.RemoveToken",
      "link": "#jsonrpc-remove-token",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Use Users.RemoveToken instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Revoke access for a given token.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"tokenId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>\n  &#125;\n&#125;",
      "description": "Revoke access for a given token.",
      "deprecated": "Use Users.RemoveToken instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"tokenId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#error\">UserError</a>",
          "link": "#<a href=\"#error\">-user-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-request-push-button-auth",
      "label": "JSONRPC.RequestPushButtonAuth",
      "link": "#jsonrpc-request-push-button-auth",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Use Users.RequestPushButtonAuth instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Authenticate a client to the api via Push Button method. Provide a device name which allows the user to identify the client and revoke the token in case the device is lost or stolen. If push button hardware is available, this will return with success and start listening for push button presses. When the push button is pressed, the PushButtonAuthFinished notification will be sent to the requesting client. The procedure will be cancelled when the connection is interrupted. If another client requests push button authentication while a procedure is still going on, the second call will take over and the first one will be notified by the PushButtonAuthFinished signal about the error. The application should make it clear to the user to not press the button when the procedure fails as this can happen for 2 reasons: a) a second user is trying to auth at the same time and only the currently active user should press the button or b) it might indicate an attacker trying to take over and snooping in for tokens.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceName\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"transactionId\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n  &#125;\n&#125;",
      "description": "Authenticate a client to the api via Push Button method. Provide a device name which allows the user to identify the client and revoke the token in case the device is lost or stolen. If push button hardware is available, this will return with success and start listening for push button presses. When the push button is pressed, the PushButtonAuthFinished notification will be sent to the requesting client. The procedure will be cancelled when the connection is interrupted. If another client requests push button authentication while a procedure is still going on, the second call will take over and the first one will be notified by the PushButtonAuthFinished signal about the error. The application should make it clear to the user to not press the button when the procedure fails as this can happen for 2 reasons: a) a second user is trying to auth at the same time and only the currently active user should press the button or b) it might indicate an attacker trying to take over and snooping in for tokens.",
      "deprecated": "Use Users.RequestPushButtonAuth instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceName\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"transactionId\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-set-notification-status",
      "label": "JSONRPC.SetNotificationStatus",
      "link": "#jsonrpc-set-notification-status",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Enable/Disable notifications for this connections. Either \\\"enabled\\\" or \\\"namespaces\\\" needs to be given but not both of them. The boolean based \\\"enabled\\\" parameter will enable/disable all notifications at once. If instead the list-based \\\"namespaces\\\" parameter is provided, all given namespaceswill be enabled, the others will be disabled. The return value of \\\"success\\\" will indicate success of the operation. The \\\"enabled\\\" property in the return value is deprecated and used for legacy compatibilty only. It will be set to true if at least one namespace has been enabled.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"d:o:enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"o:namespaces\"</span>: <span class=\"hljs-string\">\"StringList\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"d:enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"namespaces\"</span>: <span class=\"hljs-string\">\"StringList\"</span>\n  &#125;\n&#125;",
      "description": "Enable/Disable notifications for this connections. Either \"enabled\" or \"namespaces\" needs to be given but not both of them. The boolean based \"enabled\" parameter will enable/disable all notifications at once. If instead the list-based \"namespaces\" parameter is provided, all given namespaceswill be enabled, the others will be disabled. The return value of \"success\" will indicate success of the operation. The \"enabled\" property in the return value is deprecated and used for legacy compatibilty only. It will be set to true if at least one namespace has been enabled.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"d:o:enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"o:namespaces\"</span>: <span class=\"hljs-string\">\"StringList\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"d:enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"namespaces\"</span>: <span class=\"hljs-string\">\"StringList\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-setup-cloud-connection",
      "label": "JSONRPC.SetupCloudConnection",
      "link": "#jsonrpc-setup-cloud-connection",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Sets up the cloud connection by deploying a certificate and its configuration.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"certificatePEM\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"endpoint\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"privateKey\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"publicKey\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"rootCA\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Sets up the cloud connection by deploying a certificate and its configuration.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"certificatePEM\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"endpoint\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"privateKey\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"publicKey\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"rootCA\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-setup-remote-access",
      "label": "JSONRPC.SetupRemoteAccess",
      "link": "#jsonrpc-setup-remote-access",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Setup the remote connection by providing AWS token information. This requires the cloud to be connected.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"idToken\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"userId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"message\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"status\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n  &#125;\n&#125;",
      "description": "Setup the remote connection by providing AWS token information. This requires the cloud to be connected.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"idToken\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"userId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"message\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"status\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-tokens",
      "label": "JSONRPC.Tokens",
      "link": "#jsonrpc-tokens",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Use Users.GetTokens instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Return a list of TokenInfo objects of all the tokens for the current user.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"tokenInfoList\"</span>: [\n      <span class=\"hljs-string\">\"$ref:TokenInfo\"</span>\n    ]\n  &#125;\n&#125;",
      "description": "Return a list of TokenInfo objects of all the tokens for the current user.",
      "deprecated": "Use Users.GetTokens instead.",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"tokenInfoList\"</span>: [\n    <span class=\"hljs-string\">\"$ref:TokenInfo\"</span>\n  ]\n&#125;",
      "references": [
        {
          "label": "TokenInfo",
          "link": "#token-info"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-version",
      "label": "JSONRPC.Version",
      "link": "#jsonrpc-version",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Version of this nymea/JSONRPC interface.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"protocol version\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"qtBuildVersion\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"qtVersion\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"version\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Version of this nymea/JSONRPC interface.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"protocol version\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"qtBuildVersion\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"qtVersion\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"version\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "logging-get-log-entries",
      "label": "Logging.GetLogEntries",
      "link": "#logging-get-log-entries",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the LogEntries matching the given filter. The result set will contain entries matching all filter rules combined. If multiple options are given for a single filter type, the result set will contain entries matching any of those. The offset starts at the newest entry in the result set. By default all items are returned. Example: If the specified filter returns a total amount of 100 entries:\\n- a offset value of 10 would include the oldest 90 entries\\n- a offset value of 0 would return all 100 entries\\n\\nThe offset is particularly useful in combination with the maxCount property and can be used for pagination. E.g. A result set of 10000 entries can be fetched in  batches of 1000 entries by fetching\\n1) offset 0, maxCount 1000: Entries 0 to 9999\\n2) offset 10000, maxCount 1000: Entries 10000 - 19999\\n3) offset 20000, maxCount 1000: Entries 20000 - 29999\\n...\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"d:o:deviceIds\"</span>: [\n      <span class=\"hljs-string\">\"Uuid\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:eventTypes\"</span>: [\n      <span class=\"hljs-string\">\"$ref:LoggingEventType\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:limit\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n    <span class=\"hljs-attr\">\"o:loggingLevels\"</span>: [\n      <span class=\"hljs-string\">\"$ref:LoggingLevel\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:loggingSources\"</span>: [\n      <span class=\"hljs-string\">\"$ref:LoggingSource\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:offset\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n    <span class=\"hljs-attr\">\"o:thingIds\"</span>: [\n      <span class=\"hljs-string\">\"Uuid\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:timeFilters\"</span>: [\n      &#123;\n        <span class=\"hljs-attr\">\"o:endDate\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n        <span class=\"hljs-attr\">\"o:startDate\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n      &#125;\n    ],\n    <span class=\"hljs-attr\">\"o:typeIds\"</span>: [\n      <span class=\"hljs-string\">\"Uuid\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:values\"</span>: [\n      <span class=\"hljs-string\">\"Variant\"</span>\n    ]\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"count\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n    <span class=\"hljs-attr\">\"loggingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#logging-error\\\">$ref:LoggingError</a></span>,\n    <span class=\"hljs-attr\">\"o:logEntries\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:log-entries\\\">$ref:LogEntries</a></span>,\n    <span class=\"hljs-attr\">\"offset\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n  &#125;\n&#125;",
      "description": "Get the LogEntries matching the given filter. The result set will contain entries matching all filter rules combined. If multiple options are given for a single filter type, the result set will contain entries matching any of those. The offset starts at the newest entry in the result set. By default all items are returned. Example: If the specified filter returns a total amount of 100 entries:<br />- a offset value of 10 would include the oldest 90 entries\n- a offset value of 0 would return all 100 entries\n\nThe offset is particularly useful in combination with the maxCount property and can be used for pagination. E.g. A result set of 10000 entries can be fetched in  batches of 1000 entries by fetching\n1) offset 0, maxCount 1000: Entries 0 to 9999\n2) offset 10000, maxCount 1000: Entries 10000 - 19999\n3) offset 20000, maxCount 1000: Entries 20000 - 29999\n...",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"d:o:deviceIds\"</span>: [\n    <span class=\"hljs-string\">\"Uuid\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:eventTypes\"</span>: [\n    <span class=\"hljs-string\">\"$ref:LoggingEventType\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:limit\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n  <span class=\"hljs-attr\">\"o:loggingLevels\"</span>: [\n    <span class=\"hljs-string\">\"$ref:LoggingLevel\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:loggingSources\"</span>: [\n    <span class=\"hljs-string\">\"$ref:LoggingSource\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:offset\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n  <span class=\"hljs-attr\">\"o:thingIds\"</span>: [\n    <span class=\"hljs-string\">\"Uuid\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:timeFilters\"</span>: [\n    &#123;\n      <span class=\"hljs-attr\">\"o:endDate\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n      <span class=\"hljs-attr\">\"o:startDate\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n    &#125;\n  ],\n  <span class=\"hljs-attr\">\"o:typeIds\"</span>: [\n    <span class=\"hljs-string\">\"Uuid\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:values\"</span>: [\n    <span class=\"hljs-string\">\"Variant\"</span>\n  ]\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"count\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n  <span class=\"hljs-attr\">\"loggingError\"</span>: <span class=\"hljs-string\"><a href=\\\"#logging-error\\\">$ref:LoggingError</a></span>,\n  <span class=\"hljs-attr\">\"o:logEntries\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:log-entries\\\">$ref:LogEntries</a></span>,\n  <span class=\"hljs-attr\">\"offset\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#logging-error\">LoggingError</a>",
          "link": "#<a href=\"#logging-error\">-logging-error</a>"
        },
        {
          "label": "<a href=\"#o:log-entries\">LogEntries</a>",
          "link": "#<a href=\"#o:log-entries\">-log-entries</a>"
        },
        {
          "label": "LoggingEventType",
          "link": "#logging-event-type"
        },
        {
          "label": "LoggingLevel",
          "link": "#logging-level"
        },
        {
          "label": "LoggingSource",
          "link": "#logging-source"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-connect-wifi-network",
      "label": "NetworkManager.ConnectWifiNetwork",
      "link": "#network-manager-connect-wifi-network",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Connect to the wifi network with the given ssid and password.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"ssid\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n  &#125;\n&#125;",
      "description": "Connect to the wifi network with the given ssid and password.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"ssid\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#network-manager-error\">NetworkManagerError</a>",
          "link": "#<a href=\"#network-manager-error\">-network-manager-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-disconnect-interface",
      "label": "NetworkManager.DisconnectInterface",
      "link": "#network-manager-disconnect-interface",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Disconnect the given network interface. The interface will remain disconnected until the user connect it again.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n  &#125;\n&#125;",
      "description": "Disconnect the given network interface. The interface will remain disconnected until the user connect it again.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#network-manager-error\">NetworkManagerError</a>",
          "link": "#<a href=\"#network-manager-error\">-network-manager-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-enable-networking",
      "label": "NetworkManager.EnableNetworking",
      "link": "#network-manager-enable-networking",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Enable or disable networking in the NetworkManager.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"enable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n  &#125;\n&#125;",
      "description": "Enable or disable networking in the NetworkManager.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"enable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#network-manager-error\">NetworkManagerError</a>",
          "link": "#<a href=\"#network-manager-error\">-network-manager-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-enable-wireless-networking",
      "label": "NetworkManager.EnableWirelessNetworking",
      "link": "#network-manager-enable-wireless-networking",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Enable or disable wireless networking in the NetworkManager.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"enable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n  &#125;\n&#125;",
      "description": "Enable or disable wireless networking in the NetworkManager.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"enable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#network-manager-error\">NetworkManagerError</a>",
          "link": "#<a href=\"#network-manager-error\">-network-manager-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-get-network-devices",
      "label": "NetworkManager.GetNetworkDevices",
      "link": "#network-manager-get-network-devices",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the list of current network devices.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>,\n    <span class=\"hljs-attr\">\"o:wiredNetworkDevices\"</span>: [\n      <span class=\"hljs-string\">\"$ref:WiredNetworkDevice\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:wirelessNetworkDevices\"</span>: [\n      <span class=\"hljs-string\">\"$ref:WirelessNetworkDevice\"</span>\n    ]\n  &#125;\n&#125;",
      "description": "Get the list of current network devices.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>,\n  <span class=\"hljs-attr\">\"o:wiredNetworkDevices\"</span>: [\n    <span class=\"hljs-string\">\"$ref:WiredNetworkDevice\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:wirelessNetworkDevices\"</span>: [\n    <span class=\"hljs-string\">\"$ref:WirelessNetworkDevice\"</span>\n  ]\n&#125;",
      "references": [
        {
          "label": "<a href=\"#network-manager-error\">NetworkManagerError</a>",
          "link": "#<a href=\"#network-manager-error\">-network-manager-error</a>"
        },
        {
          "label": "WiredNetworkDevice",
          "link": "#wired-network-device"
        },
        {
          "label": "WirelessNetworkDevice",
          "link": "#wireless-network-device"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-get-network-status",
      "label": "NetworkManager.GetNetworkStatus",
      "link": "#network-manager-get-network-status",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the current network manager status.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>,\n    <span class=\"hljs-attr\">\"o:status\"</span>: &#123;\n      <span class=\"hljs-attr\">\"networkingEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n      <span class=\"hljs-attr\">\"state\"</span>: <span class=\"hljs-string\">\"$ref:NetworkManagerState\"</span>,\n      <span class=\"hljs-attr\">\"wirelessNetworkingEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n    &#125;\n  &#125;\n&#125;",
      "description": "Get the current network manager status.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>,\n  <span class=\"hljs-attr\">\"o:status\"</span>: &#123;\n    <span class=\"hljs-attr\">\"networkingEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"state\"</span>: <span class=\"hljs-string\">\"$ref:NetworkManagerState\"</span>,\n    <span class=\"hljs-attr\">\"wirelessNetworkingEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "references": [
        {
          "label": "<a href=\"#network-manager-error\">NetworkManagerError</a>",
          "link": "#<a href=\"#network-manager-error\">-network-manager-error</a>"
        },
        {
          "label": "NetworkManagerState",
          "link": "#network-manager-state"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-get-wireless-access-points",
      "label": "NetworkManager.GetWirelessAccessPoints",
      "link": "#network-manager-get-wireless-access-points",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the current list of wireless network access points for the given interface. The interface has to be a WirelessNetworkDevice.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>,\n    <span class=\"hljs-attr\">\"o:wirelessAccessPoints\"</span>: [\n      <span class=\"hljs-string\">\"$ref:WirelessAccessPoint\"</span>\n    ]\n  &#125;\n&#125;",
      "description": "Get the current list of wireless network access points for the given interface. The interface has to be a WirelessNetworkDevice.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>,\n  <span class=\"hljs-attr\">\"o:wirelessAccessPoints\"</span>: [\n    <span class=\"hljs-string\">\"$ref:WirelessAccessPoint\"</span>\n  ]\n&#125;",
      "references": [
        {
          "label": "<a href=\"#network-manager-error\">NetworkManagerError</a>",
          "link": "#<a href=\"#network-manager-error\">-network-manager-error</a>"
        },
        {
          "label": "WirelessAccessPoint",
          "link": "#wireless-access-point"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-scan-wifi-networks",
      "label": "NetworkManager.ScanWifiNetworks",
      "link": "#network-manager-scan-wifi-networks",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Start a wifi scan for searching new networks.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n  &#125;\n&#125;",
      "description": "Start a wifi scan for searching new networks.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#network-manager-error\">NetworkManagerError</a>",
          "link": "#<a href=\"#network-manager-error\">-network-manager-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-start-access-point",
      "label": "NetworkManager.StartAccessPoint",
      "link": "#network-manager-start-access-point",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Start a WiFi Access point on the given interface with the given SSID and password. Use DisconnectInterface to stop it again.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"ssid\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n  &#125;\n&#125;",
      "description": "Start a WiFi Access point on the given interface with the given SSID and password. Use DisconnectInterface to stop it again.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"ssid\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"networkManagerError\"</span>: <span class=\"hljs-string\"><a href=\\\"#network-manager-error\\\">$ref:NetworkManagerError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#network-manager-error\">NetworkManagerError</a>",
          "link": "#<a href=\"#network-manager-error\">-network-manager-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rules-add-rule",
      "label": "Rules.AddRule",
      "link": "#rules-add-rule",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Add a rule. You can describe rules by one or many EventDesciptors and a StateEvaluator. Note that only one of either eventDescriptor or eventDescriptorList may be passed at a time. A rule can be created but left disabled, meaning it won't actually be executed until set to enabled. If not given, enabled defaults to true. A rule can have a list of actions and exitActions. It must have at least one Action. For state based rules, actions will be executed when the system enters a state matching the stateDescriptor. The exitActions will be executed when the system leaves the described state again. For event based rules, actions will be executed when a matching event happens and if the stateEvaluator matches the system's state. ExitActions for such rules will be executed when a matching event happens and the stateEvaluator is not matching the system's state. A rule marked as executable can be executed via the API using Rules.ExecuteRule, that means, its actions will be executed regardless of the eventDescriptor and stateEvaluators.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"actions\"</span>: [\n      <span class=\"hljs-string\">\"$ref:RuleAction\"</span>\n    ],\n    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"o:eventDescriptors\"</span>: [\n      <span class=\"hljs-string\">\"$ref:EventDescriptor\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:executable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"o:exitActions\"</span>: [\n      <span class=\"hljs-string\">\"$ref:RuleAction\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:stateEvaluator\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:state-evaluator\\\">$ref:StateEvaluator</a></span>,\n    <span class=\"hljs-attr\">\"o:timeDescriptor\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:time-descriptor\\\">$ref:TimeDescriptor</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n  &#125;\n&#125;",
      "description": "Add a rule. You can describe rules by one or many EventDesciptors and a StateEvaluator. Note that only one of either eventDescriptor or eventDescriptorList may be passed at a time. A rule can be created but left disabled, meaning it won't actually be executed until set to enabled. If not given, enabled defaults to true. A rule can have a list of actions and exitActions. It must have at least one Action. For state based rules, actions will be executed when the system enters a state matching the stateDescriptor. The exitActions will be executed when the system leaves the described state again. For event based rules, actions will be executed when a matching event happens and if the stateEvaluator matches the system's state. ExitActions for such rules will be executed when a matching event happens and the stateEvaluator is not matching the system's state. A rule marked as executable can be executed via the API using Rules.ExecuteRule, that means, its actions will be executed regardless of the eventDescriptor and stateEvaluators.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"actions\"</span>: [\n    <span class=\"hljs-string\">\"$ref:RuleAction\"</span>\n  ],\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"o:eventDescriptors\"</span>: [\n    <span class=\"hljs-string\">\"$ref:EventDescriptor\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:executable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"o:exitActions\"</span>: [\n    <span class=\"hljs-string\">\"$ref:RuleAction\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:stateEvaluator\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:state-evaluator\\\">$ref:StateEvaluator</a></span>,\n  <span class=\"hljs-attr\">\"o:timeDescriptor\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:time-descriptor\\\">$ref:TimeDescriptor</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:state-evaluator\">StateEvaluator</a>",
          "link": "#<a href=\"#o:state-evaluator\">-state-evaluator</a>"
        },
        {
          "label": "<a href=\"#o:time-descriptor\">TimeDescriptor</a>",
          "link": "#<a href=\"#o:time-descriptor\">-time-descriptor</a>"
        },
        {
          "label": "<a href=\"#rule-error\">RuleError</a>",
          "link": "#<a href=\"#rule-error\">-rule-error</a>"
        },
        {
          "label": "EventDescriptor",
          "link": "#event-descriptor"
        },
        {
          "label": "RuleAction",
          "link": "#rule-action"
        },
        {
          "label": "RuleAction",
          "link": "#rule-action"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rules-disable-rule",
      "label": "Rules.DisableRule",
      "link": "#rules-disable-rule",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Disable a rule. The rule won't be triggered by it's events or state changes while it is disabled. If successful, the notification \\\"Rule.RuleConfigurationChanged\\\" will be emitted.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n  &#125;\n&#125;",
      "description": "Disable a rule. The rule won't be triggered by it's events or state changes while it is disabled. If successful, the notification \"Rule.RuleConfigurationChanged\" will be emitted.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#rule-error\">RuleError</a>",
          "link": "#<a href=\"#rule-error\">-rule-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rules-edit-rule",
      "label": "Rules.EditRule",
      "link": "#rules-edit-rule",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Edit the parameters of a rule. The configuration of the rule with the given ruleId will be replaced with the new given configuration. In ordert to enable or disable a Rule, please use the methods \\\"Rules.EnableRule\\\" and \\\"Rules.DisableRule\\\". If successful, the notification \\\"Rule.RuleConfigurationChanged\\\" will be emitted.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"actions\"</span>: [\n      <span class=\"hljs-string\">\"$ref:RuleAction\"</span>\n    ],\n    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"o:eventDescriptors\"</span>: [\n      <span class=\"hljs-string\">\"$ref:EventDescriptor\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:executable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"o:exitActions\"</span>: [\n      <span class=\"hljs-string\">\"$ref:RuleAction\"</span>\n    ],\n    <span class=\"hljs-attr\">\"o:stateEvaluator\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:state-evaluator\\\">$ref:StateEvaluator</a></span>,\n    <span class=\"hljs-attr\">\"o:timeDescriptor\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:time-descriptor\\\">$ref:TimeDescriptor</a></span>,\n    <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:rule\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:rule\\\">$ref:Rule</a></span>,\n    <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n  &#125;\n&#125;",
      "description": "Edit the parameters of a rule. The configuration of the rule with the given ruleId will be replaced with the new given configuration. In ordert to enable or disable a Rule, please use the methods \"Rules.EnableRule\" and \"Rules.DisableRule\". If successful, the notification \"Rule.RuleConfigurationChanged\" will be emitted.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"actions\"</span>: [\n    <span class=\"hljs-string\">\"$ref:RuleAction\"</span>\n  ],\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"o:eventDescriptors\"</span>: [\n    <span class=\"hljs-string\">\"$ref:EventDescriptor\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:executable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"o:exitActions\"</span>: [\n    <span class=\"hljs-string\">\"$ref:RuleAction\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:stateEvaluator\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:state-evaluator\\\">$ref:StateEvaluator</a></span>,\n  <span class=\"hljs-attr\">\"o:timeDescriptor\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:time-descriptor\\\">$ref:TimeDescriptor</a></span>,\n  <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:rule\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:rule\\\">$ref:Rule</a></span>,\n  <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:rule\">Rule</a>",
          "link": "#<a href=\"#o:rule\">-rule</a>"
        },
        {
          "label": "<a href=\"#o:state-evaluator\">StateEvaluator</a>",
          "link": "#<a href=\"#o:state-evaluator\">-state-evaluator</a>"
        },
        {
          "label": "<a href=\"#o:time-descriptor\">TimeDescriptor</a>",
          "link": "#<a href=\"#o:time-descriptor\">-time-descriptor</a>"
        },
        {
          "label": "<a href=\"#rule-error\">RuleError</a>",
          "link": "#<a href=\"#rule-error\">-rule-error</a>"
        },
        {
          "label": "EventDescriptor",
          "link": "#event-descriptor"
        },
        {
          "label": "RuleAction",
          "link": "#rule-action"
        },
        {
          "label": "RuleAction",
          "link": "#rule-action"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rules-enable-rule",
      "label": "Rules.EnableRule",
      "link": "#rules-enable-rule",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Enabled a rule that has previously been disabled.If successful, the notification \\\"Rule.RuleConfigurationChanged\\\" will be emitted.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n  &#125;\n&#125;",
      "description": "Enabled a rule that has previously been disabled.If successful, the notification \"Rule.RuleConfigurationChanged\" will be emitted.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#rule-error\">RuleError</a>",
          "link": "#<a href=\"#rule-error\">-rule-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rules-execute-actions",
      "label": "Rules.ExecuteActions",
      "link": "#rules-execute-actions",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Execute the action list of the rule with the given ruleId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n  &#125;\n&#125;",
      "description": "Execute the action list of the rule with the given ruleId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#rule-error\">RuleError</a>",
          "link": "#<a href=\"#rule-error\">-rule-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rules-execute-exit-actions",
      "label": "Rules.ExecuteExitActions",
      "link": "#rules-execute-exit-actions",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Execute the exit action list of the rule with the given ruleId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n  &#125;\n&#125;",
      "description": "Execute the exit action list of the rule with the given ruleId.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#rule-error\">RuleError</a>",
          "link": "#<a href=\"#rule-error\">-rule-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rules-find-rules",
      "label": "Rules.FindRules",
      "link": "#rules-find-rules",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Find a list of rules containing any of the given parameters.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"d:o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleIds\"</span>: [\n      <span class=\"hljs-string\">\"Uuid\"</span>\n    ]\n  &#125;\n&#125;",
      "description": "Find a list of rules containing any of the given parameters.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"d:o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"ruleIds\"</span>: [\n    <span class=\"hljs-string\">\"Uuid\"</span>\n  ]\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "rules-get-rule-details",
      "label": "Rules.GetRuleDetails",
      "link": "#rules-get-rule-details",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get details for the rule identified by ruleId\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:rule\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:rule\\\">$ref:Rule</a></span>,\n    <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n  &#125;\n&#125;",
      "description": "Get details for the rule identified by ruleId",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:rule\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:rule\\\">$ref:Rule</a></span>,\n  <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:rule\">Rule</a>",
          "link": "#<a href=\"#o:rule\">-rule</a>"
        },
        {
          "label": "<a href=\"#rule-error\">RuleError</a>",
          "link": "#<a href=\"#rule-error\">-rule-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rules-get-rules",
      "label": "Rules.GetRules",
      "link": "#rules-get-rules",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the descriptions of all configured rules. If you need more information about a specific rule use the method Rules.GetRuleDetails.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleDescriptions\"</span>: [\n      <span class=\"hljs-string\">\"$ref:RuleDescription\"</span>\n    ]\n  &#125;\n&#125;",
      "description": "Get the descriptions of all configured rules. If you need more information about a specific rule use the method Rules.GetRuleDetails.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"ruleDescriptions\"</span>: [\n    <span class=\"hljs-string\">\"$ref:RuleDescription\"</span>\n  ]\n&#125;",
      "references": [
        {
          "label": "RuleDescription",
          "link": "#rule-description"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rules-remove-rule",
      "label": "Rules.RemoveRule",
      "link": "#rules-remove-rule",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Remove a rule\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n  &#125;\n&#125;",
      "description": "Remove a rule",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"ruleError\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule-error\\\">$ref:RuleError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#rule-error\">RuleError</a>",
          "link": "#<a href=\"#rule-error\">-rule-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "scripts-add-script",
      "label": "Scripts.AddScript",
      "link": "#scripts-add-script",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Add a script\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"content\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:errors\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n    <span class=\"hljs-attr\">\"o:script\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:script\\\">$ref:Script</a></span>,\n    <span class=\"hljs-attr\">\"scriptError\"</span>: <span class=\"hljs-string\"><a href=\\\"#script-error\\\">$ref:ScriptError</a></span>\n  &#125;\n&#125;",
      "description": "Add a script",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"content\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:errors\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n  <span class=\"hljs-attr\">\"o:script\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:script\\\">$ref:Script</a></span>,\n  <span class=\"hljs-attr\">\"scriptError\"</span>: <span class=\"hljs-string\"><a href=\\\"#script-error\\\">$ref:ScriptError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:script\">Script</a>",
          "link": "#<a href=\"#o:script\">-script</a>"
        },
        {
          "label": "<a href=\"#script-error\">ScriptError</a>",
          "link": "#<a href=\"#script-error\">-script-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "scripts-edit-script",
      "label": "Scripts.EditScript",
      "link": "#scripts-edit-script",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Edit a script\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:content\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:name\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:errors\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n    <span class=\"hljs-attr\">\"scriptError\"</span>: <span class=\"hljs-string\"><a href=\\\"#script-error\\\">$ref:ScriptError</a></span>\n  &#125;\n&#125;",
      "description": "Edit a script",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:content\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:name\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:errors\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n  <span class=\"hljs-attr\">\"scriptError\"</span>: <span class=\"hljs-string\"><a href=\\\"#script-error\\\">$ref:ScriptError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#script-error\">ScriptError</a>",
          "link": "#<a href=\"#script-error\">-script-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "scripts-get-script-content",
      "label": "Scripts.GetScriptContent",
      "link": "#scripts-get-script-content",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get a scripts content.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:content\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"scriptError\"</span>: <span class=\"hljs-string\"><a href=\\\"#script-error\\\">$ref:ScriptError</a></span>\n  &#125;\n&#125;",
      "description": "Get a scripts content.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:content\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"scriptError\"</span>: <span class=\"hljs-string\"><a href=\\\"#script-error\\\">$ref:ScriptError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#script-error\">ScriptError</a>",
          "link": "#<a href=\"#script-error\">-script-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "scripts-get-scripts",
      "label": "Scripts.GetScripts",
      "link": "#scripts-get-scripts",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get all script, that is, their names and properties, but no content.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"scripts\"</span>: <span class=\"hljs-string\"><a href=\\\"#scripts\\\">$ref:Scripts</a></span>\n  &#125;\n&#125;",
      "description": "Get all script, that is, their names and properties, but no content.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"scripts\"</span>: <span class=\"hljs-string\"><a href=\\\"#scripts\\\">$ref:Scripts</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#scripts\">Scripts</a>",
          "link": "#<a href=\"#scripts\">-scripts</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "scripts-remove-script",
      "label": "Scripts.RemoveScript",
      "link": "#scripts-remove-script",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"remove a script\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"scriptError\"</span>: <span class=\"hljs-string\"><a href=\\\"#script-error\\\">$ref:ScriptError</a></span>\n  &#125;\n&#125;",
      "description": "remove a script",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"scriptError\"</span>: <span class=\"hljs-string\"><a href=\\\"#script-error\\\">$ref:ScriptError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#script-error\">ScriptError</a>",
          "link": "#<a href=\"#script-error\">-script-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "states-get-state-type",
      "label": "States.GetStateType",
      "link": "#states-get-state-type",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Please use the Integrations namespace instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the StateType for the given stateTypeId.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n    <span class=\"hljs-attr\">\"o:stateType\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:state-type\\\">$ref:StateType</a></span>\n  &#125;\n&#125;",
      "description": "Get the StateType for the given stateTypeId.",
      "deprecated": "Please use the Integrations namespace instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"deviceError\"</span>: <span class=\"hljs-string\"><a href=\\\"#device-error\\\">$ref:DeviceError</a></span>,\n  <span class=\"hljs-attr\">\"o:stateType\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:state-type\\\">$ref:StateType</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#device-error\">DeviceError</a>",
          "link": "#<a href=\"#device-error\">-device-error</a>"
        },
        {
          "label": "<a href=\"#o:state-type\">StateType</a>",
          "link": "#<a href=\"#o:state-type\">-state-type</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "system-check-for-updates",
      "label": "System.CheckForUpdates",
      "link": "#system-check-for-updates",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Instruct the system to poll the server for updates. Normally the system should automatically do this in regular intervals, however, if the client wants to allow the user to manually check for new updates now, this can be called. Returns true if the operation has been started successfully and the update manager will become busy. In order to know whether there are updates available, clients should walk through the list of packages retrieved from GetPackages and check whether there are packages with the updateAvailable flag set to true.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Instruct the system to poll the server for updates. Normally the system should automatically do this in regular intervals, however, if the client wants to allow the user to manually check for new updates now, this can be called. Returns true if the operation has been started successfully and the update manager will become busy. In order to know whether there are updates available, clients should walk through the list of packages retrieved from GetPackages and check whether there are packages with the updateAvailable flag set to true.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-enable-repository",
      "label": "System.EnableRepository",
      "link": "#system-enable-repository",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Enable or disable a repository.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"repositoryId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Enable or disable a repository.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"repositoryId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-get-capabilities",
      "label": "System.GetCapabilities",
      "link": "#system-get-capabilities",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the list of capabilites on this system. The property \\\"powerManagement\\\" indicates whether restarting nymea and rebooting or shutting down is supported on this system. The property \\\"updateManagement indicates whether system update features are available in this system. The property \\\"timeManagement\\\" indicates whether the system time can be configured on this system. Note that GetTime will be available in any case.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"powerManagement\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"timeManagement\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"updateManagement\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Get the list of capabilites on this system. The property \"powerManagement\" indicates whether restarting nymea and rebooting or shutting down is supported on this system. The property \"updateManagement indicates whether system update features are available in this system. The property \"timeManagement\" indicates whether the system time can be configured on this system. Note that GetTime will be available in any case.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"powerManagement\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"timeManagement\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"updateManagement\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-get-packages",
      "label": "System.GetPackages",
      "link": "#system-get-packages",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the list of packages currently available to the system. This might include installed available but not installed packages. Installed packages will have the installedVersion set to a non-empty value.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"packages\"</span>: <span class=\"hljs-string\"><a href=\\\"#packages\\\">$ref:Packages</a></span>\n  &#125;\n&#125;",
      "description": "Get the list of packages currently available to the system. This might include installed available but not installed packages. Installed packages will have the installedVersion set to a non-empty value.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"packages\"</span>: <span class=\"hljs-string\"><a href=\\\"#packages\\\">$ref:Packages</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#packages\">Packages</a>",
          "link": "#<a href=\"#packages\">-packages</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "system-get-repositories",
      "label": "System.GetRepositories",
      "link": "#system-get-repositories",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the list of repositories currently available to the system.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"repositories\"</span>: <span class=\"hljs-string\"><a href=\\\"#repositories\\\">$ref:Repositories</a></span>\n  &#125;\n&#125;",
      "description": "Get the list of repositories currently available to the system.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"repositories\"</span>: <span class=\"hljs-string\"><a href=\\\"#repositories\\\">$ref:Repositories</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#repositories\">Repositories</a>",
          "link": "#<a href=\"#repositories\">-repositories</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "system-get-time",
      "label": "System.GetTime",
      "link": "#system-get-time",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the system time and configuraton. The \\\"time\\\" and \\\"timeZone\\\" properties give the current server time and time zone. \\\"automaticTimeAvailable\\\" indicates whether this system supports automatically setting the clock (e.g. using NTP). \\\"automaticTime\\\" will be true if the system is configured to automatically update the clock.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"automaticTime\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"automaticTimeAvailable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"time\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n    <span class=\"hljs-attr\">\"timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Get the system time and configuraton. The \"time\" and \"timeZone\" properties give the current server time and time zone. \"automaticTimeAvailable\" indicates whether this system supports automatically setting the clock (e.g. using NTP). \"automaticTime\" will be true if the system is configured to automatically update the clock.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"automaticTime\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"automaticTimeAvailable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"time\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n  <span class=\"hljs-attr\">\"timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-get-time-zones",
      "label": "System.GetTimeZones",
      "link": "#system-get-time-zones",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Returns the list of IANA specified time zone IDs which can be used to select a time zone. It is not required to use this method if the client toolkit already provides means to obtain a list of IANA time zone ids.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"timeZones\"</span>: <span class=\"hljs-string\">\"StringList\"</span>\n  &#125;\n&#125;",
      "description": "Returns the list of IANA specified time zone IDs which can be used to select a time zone. It is not required to use this method if the client toolkit already provides means to obtain a list of IANA time zone ids.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"timeZones\"</span>: <span class=\"hljs-string\">\"StringList\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-get-update-status",
      "label": "System.GetUpdateStatus",
      "link": "#system-get-update-status",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the current status of the update system. \\\"busy\\\" indicates that the system is current busy with an operation regarding updates. This does not necessarily mean an actual update is running. When this is true, update related functions on the client should be marked as busy and no interaction with update components shall be allowed. An example for such a state is when the system queries the server if there are updates available, typically after a call to CheckForUpdates. \\\"updateRunning\\\" on the other hand indicates an actual update process is ongoing. The user should be informed about it, the system also might restart at any point while an update is running.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"busy\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"updateRunning\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Get the current status of the update system. \"busy\" indicates that the system is current busy with an operation regarding updates. This does not necessarily mean an actual update is running. When this is true, update related functions on the client should be marked as busy and no interaction with update components shall be allowed. An example for such a state is when the system queries the server if there are updates available, typically after a call to CheckForUpdates. \"updateRunning\" on the other hand indicates an actual update process is ongoing. The user should be informed about it, the system also might restart at any point while an update is running.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"busy\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"updateRunning\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-reboot",
      "label": "System.Reboot",
      "link": "#system-reboot",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Initiate a reboot of the system. The return value will indicate whether the procedure has been initiated successfully.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Initiate a reboot of the system. The return value will indicate whether the procedure has been initiated successfully.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-remove-packages",
      "label": "System.RemovePackages",
      "link": "#system-remove-packages",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Starts removing a package. Returns true if the removal has been started successfully. Before calling this method, clients should check whether the package can be removed (canRemove set to true).\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"packageIds\"</span>: [\n      <span class=\"hljs-string\">\"String\"</span>\n    ]\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Starts removing a package. Returns true if the removal has been started successfully. Before calling this method, clients should check whether the package can be removed (canRemove set to true).",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"packageIds\"</span>: [\n    <span class=\"hljs-string\">\"String\"</span>\n  ]\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-restart",
      "label": "System.Restart",
      "link": "#system-restart",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Initiate a restart of the nymea service. The return value will indicate whether the procedure has been initiated successfully.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Initiate a restart of the nymea service. The return value will indicate whether the procedure has been initiated successfully.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-rollback-packages",
      "label": "System.RollbackPackages",
      "link": "#system-rollback-packages",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Starts a rollback. Returns true if the rollback has been started successfully. Before calling this method, clients should check whether the package can be rolled back (canRollback set to true).\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"packageIds\"</span>: [\n      <span class=\"hljs-string\">\"String\"</span>\n    ]\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Starts a rollback. Returns true if the rollback has been started successfully. Before calling this method, clients should check whether the package can be rolled back (canRollback set to true).",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"packageIds\"</span>: [\n    <span class=\"hljs-string\">\"String\"</span>\n  ]\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-set-time",
      "label": "System.SetTime",
      "link": "#system-set-time",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Set the system time configuraton. The system can be configured to update the time automatically by setting \\\"automaticTime\\\" to true. This will only work if the \\\"timeManagement\\\" capability is available on this system and \\\"GetTime\\\" indicates the availability of automatic time settings. If any of those requirements are not met, this method will return \\\"false\\\" in the \\\"success\\\" property. In order to manually configure the time, \\\"automaticTime\\\" should be set to false and \\\"time\\\" should be set. Note that if \\\"automaticTime\\\" is set to true and a manual \\\"time\\\" is still passed, the system will attempt to configure automatic time updates and only set the manual time if automatic mode fails. A time zone can always be passed optionally to change the system time zone and should be a IANA time zone id.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:automaticTime\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"o:time\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n    <span class=\"hljs-attr\">\"o:timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Set the system time configuraton. The system can be configured to update the time automatically by setting \"automaticTime\" to true. This will only work if the \"timeManagement\" capability is available on this system and \"GetTime\" indicates the availability of automatic time settings. If any of those requirements are not met, this method will return \"false\" in the \"success\" property. In order to manually configure the time, \"automaticTime\" should be set to false and \"time\" should be set. Note that if \"automaticTime\" is set to true and a manual \"time\" is still passed, the system will attempt to configure automatic time updates and only set the manual time if automatic mode fails. A time zone can always be passed optionally to change the system time zone and should be a IANA time zone id.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:automaticTime\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"o:time\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n  <span class=\"hljs-attr\">\"o:timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-shutdown",
      "label": "System.Shutdown",
      "link": "#system-shutdown",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Initiate a shutdown of the system. The return value will indicate whether the procedure has been initiated successfully.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Initiate a shutdown of the system. The return value will indicate whether the procedure has been initiated successfully.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-update-packages",
      "label": "System.UpdatePackages",
      "link": "#system-update-packages",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Starts updating/installing packages with the given ids. Returns true if the upgrade has been started successfully. Note that it might still fail later. Before calling this method, clients should check the packages whether they are in a state where they can either be installed (no installedVersion set) or upgraded (updateAvailable set to true).\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:packageIds\"</span>: [\n      <span class=\"hljs-string\">\"String\"</span>\n    ]\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Starts updating/installing packages with the given ids. Returns true if the upgrade has been started successfully. Note that it might still fail later. Before calling this method, clients should check the packages whether they are in a state where they can either be installed (no installedVersion set) or upgraded (updateAvailable set to true).",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:packageIds\"</span>: [\n    <span class=\"hljs-string\">\"String\"</span>\n  ]\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "tags-add-tag",
      "label": "Tags.AddTag",
      "link": "#tags-add-tag",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Add a Tag. A Tag must have a thingId OR a ruleId (call this method twice if you want to attach the same tag to a thing and a rule), an appId (Use the appId of your app), a tagId (e.g. \\\"favorites\\\") and a value. Upon success, a TagAdded notification will be emitted. Calling this method twice for the same ids (thing/rule, appId and tagId) but with a different value will update the tag's value and the TagValueChanged notification will be emitted.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"tag\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag\\\">$ref:Tag</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"tagError\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag-error\\\">$ref:TagError</a></span>\n  &#125;\n&#125;",
      "description": "Add a Tag. A Tag must have a thingId OR a ruleId (call this method twice if you want to attach the same tag to a thing and a rule), an appId (Use the appId of your app), a tagId (e.g. \"favorites\") and a value. Upon success, a TagAdded notification will be emitted. Calling this method twice for the same ids (thing/rule, appId and tagId) but with a different value will update the tag's value and the TagValueChanged notification will be emitted.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"tag\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag\\\">$ref:Tag</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"tagError\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag-error\\\">$ref:TagError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#tag-error\">TagError</a>",
          "link": "#<a href=\"#tag-error\">-tag-error</a>"
        },
        {
          "label": "<a href=\"#tag\">Tag</a>",
          "link": "#<a href=\"#tag\">-tag</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "tags-get-tags",
      "label": "Tags.GetTags",
      "link": "#tags-get-tags",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get the Tags matching the given filter. Tags can be filtered by a thingID, a ruleId, an appId, a tagId or a combination of any (however, combining thingId and ruleId will return an empty result set).\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"d:o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:appId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"o:tagId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:tags\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:tags\\\">$ref:Tags</a></span>,\n    <span class=\"hljs-attr\">\"tagError\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag-error\\\">$ref:TagError</a></span>\n  &#125;\n&#125;",
      "description": "Get the Tags matching the given filter. Tags can be filtered by a thingID, a ruleId, an appId, a tagId or a combination of any (however, combining thingId and ruleId will return an empty result set).",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"d:o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:appId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:tagId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:tags\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:tags\\\">$ref:Tags</a></span>,\n  <span class=\"hljs-attr\">\"tagError\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag-error\\\">$ref:TagError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#o:tags\">Tags</a>",
          "link": "#<a href=\"#o:tags\">-tags</a>"
        },
        {
          "label": "<a href=\"#tag-error\">TagError</a>",
          "link": "#<a href=\"#tag-error\">-tag-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "tags-remove-tag",
      "label": "Tags.RemoveTag",
      "link": "#tags-remove-tag",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Remove a Tag. Tag value is optional and will be disregarded. If the ids match, the tag will be deleted and a TagRemoved notification will be emitted.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"tag\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag\\\">$ref:Tag</a></span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"tagError\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag-error\\\">$ref:TagError</a></span>\n  &#125;\n&#125;",
      "description": "Remove a Tag. Tag value is optional and will be disregarded. If the ids match, the tag will be deleted and a TagRemoved notification will be emitted.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"tag\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag\\\">$ref:Tag</a></span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"tagError\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag-error\\\">$ref:TagError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#tag-error\">TagError</a>",
          "link": "#<a href=\"#tag-error\">-tag-error</a>"
        },
        {
          "label": "<a href=\"#tag\">Tag</a>",
          "link": "#<a href=\"#tag\">-tag</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "users-authenticate",
      "label": "Users.Authenticate",
      "link": "#users-authenticate",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Authenticate a client to the api via user &amp; password challenge. Provide a device name which allows the user to identify the client and revoke the token in case the device is lost or stolen. This will return a new token to be used to authorize a client at the API.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"username\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:token\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Authenticate a client to the api via user & password challenge. Provide a device name which allows the user to identify the client and revoke the token in case the device is lost or stolen. This will return a new token to be used to authorize a client at the API.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"username\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"o:token\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "users-change-password",
      "label": "Users.ChangePassword",
      "link": "#users-change-password",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Change the password for the currently logged in user.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"newPassword\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>\n  &#125;\n&#125;",
      "description": "Change the password for the currently logged in user.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"newPassword\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#error\">UserError</a>",
          "link": "#<a href=\"#error\">-user-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "users-create-user",
      "label": "Users.CreateUser",
      "link": "#users-create-user",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Create a new user in the API. Currently this is only allowed to be called once when a new nymea instance is set up. Call Authenticate after this to obtain a device token for this user.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"username\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>\n  &#125;\n&#125;",
      "description": "Create a new user in the API. Currently this is only allowed to be called once when a new nymea instance is set up. Call Authenticate after this to obtain a device token for this user.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"username\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#error\">UserError</a>",
          "link": "#<a href=\"#error\">-user-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "users-get-tokens",
      "label": "Users.GetTokens",
      "link": "#users-get-tokens",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get all the tokens for the current user.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>,\n    <span class=\"hljs-attr\">\"o:tokenInfoList\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:token-info-list\\\">$ref:TokenInfoList</a></span>\n  &#125;\n&#125;",
      "description": "Get all the tokens for the current user.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>,\n  <span class=\"hljs-attr\">\"o:tokenInfoList\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:token-info-list\\\">$ref:TokenInfoList</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#error\">UserError</a>",
          "link": "#<a href=\"#error\">-user-error</a>"
        },
        {
          "label": "<a href=\"#o:token-info-list\">TokenInfoList</a>",
          "link": "#<a href=\"#o:token-info-list\">-token-info-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "users-get-user-info",
      "label": "Users.GetUserInfo",
      "link": "#users-get-user-info",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Get info about the current token (the currently logged in user).\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>,\n    <span class=\"hljs-attr\">\"o:userInfo\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:user-info\\\">$ref:UserInfo</a></span>\n  &#125;\n&#125;",
      "description": "Get info about the current token (the currently logged in user).",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>,\n  <span class=\"hljs-attr\">\"o:userInfo\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:user-info\\\">$ref:UserInfo</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#error\">UserError</a>",
          "link": "#<a href=\"#error\">-user-error</a>"
        },
        {
          "label": "<a href=\"#o:user-info\">UserInfo</a>",
          "link": "#<a href=\"#o:user-info\">-user-info</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "users-remove-token",
      "label": "Users.RemoveToken",
      "link": "#users-remove-token",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Revoke access for a given token.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"tokenId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>\n  &#125;\n&#125;",
      "description": "Revoke access for a given token.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"tokenId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"error\"</span>: <span class=\"hljs-string\"><a href=\\\"#error\\\">$ref:UserError</a></span>\n&#125;",
      "references": [
        {
          "label": "<a href=\"#error\">UserError</a>",
          "link": "#<a href=\"#error\">-user-error</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "users-request-push-button-auth",
      "label": "Users.RequestPushButtonAuth",
      "link": "#users-request-push-button-auth",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Authenticate a client to the api via Push Button method. Provide a device name which allows the user to identify the client and revoke the token in case the device is lost or stolen. If push button hardware is available, this will return with success and start listening for push button presses. When the push button is pressed, the PushButtonAuthFinished notification will be sent to the requesting client. The procedure will be cancelled when the connection is interrupted. If another client requests push button authentication while a procedure is still going on, the second call will take over and the first one will be notified by the PushButtonAuthFinished signal about the error. The application should make it clear to the user to not press the button when the procedure fails as this can happen for 2 reasons: a) a second user is trying to auth at the same time and only the currently active user should press the button or b) it might indicate an attacker trying to take over and snooping in for tokens.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceName\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;,\n  <span class=\"hljs-attr\">\"returns\"</span>: &#123;\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"transactionId\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n  &#125;\n&#125;",
      "description": "Authenticate a client to the api via Push Button method. Provide a device name which allows the user to identify the client and revoke the token in case the device is lost or stolen. If push button hardware is available, this will return with success and start listening for push button presses. When the push button is pressed, the PushButtonAuthFinished notification will be sent to the requesting client. The procedure will be cancelled when the connection is interrupted. If another client requests push button authentication while a procedure is still going on, the second call will take over and the first one will be notified by the PushButtonAuthFinished signal about the error. The application should make it clear to the user to not press the button when the procedure fails as this can happen for 2 reasons: a) a second user is trying to auth at the same time and only the currently active user should press the button or b) it might indicate an attacker trying to take over and snooping in for tokens.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceName\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "&#123;\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"transactionId\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n&#125;",
      "references": [],
      "deprecations": ""
    }
  ],
  "notifications": [
    {
      "id": "configuration-basic-configuration-changed",
      "label": "Configuration.BasicConfigurationChanged",
      "link": "#configuration-basic-configuration-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the basic configuration of this server changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"basicConfiguration\"</span>: &#123;\n      <span class=\"hljs-attr\">\"d:language\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n      <span class=\"hljs-attr\">\"d:serverTime\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n      <span class=\"hljs-attr\">\"d:timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n      <span class=\"hljs-attr\">\"debugServerEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n      <span class=\"hljs-attr\">\"serverName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n      <span class=\"hljs-attr\">\"serverUuid\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n    &#125;\n  &#125;\n&#125;",
      "description": "Emitted whenever the basic configuration of this server changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"basicConfiguration\"</span>: &#123;\n    <span class=\"hljs-attr\">\"d:language\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"d:serverTime\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n    <span class=\"hljs-attr\">\"d:timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"debugServerEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"serverName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"serverUuid\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "configuration-cloud-configuration-changed",
      "label": "Configuration.CloudConfigurationChanged",
      "link": "#configuration-cloud-configuration-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the cloud configuration is changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"cloudConfiguration\"</span>: &#123;\n      <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n    &#125;\n  &#125;\n&#125;",
      "description": "Emitted whenever the cloud configuration is changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"cloudConfiguration\"</span>: &#123;\n    <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "configuration-language-changed",
      "label": "Configuration.LanguageChanged",
      "link": "#configuration-language-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the language of the server changed. The Plugins, Vendors and ThingClasses have to be reloaded to get the translated data.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"language\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the language of the server changed. The Plugins, Vendors and ThingClasses have to be reloaded to get the translated data.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"language\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "configuration-mqtt-policy-changed",
      "label": "Configuration.MqttPolicyChanged",
      "link": "#configuration-mqtt-policy-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a MQTT broker policy is changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"policy\"</span>: <span class=\"hljs-string\"><a href=\\\"#policy\\\">$ref:MqttPolicy</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a MQTT broker policy is changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"policy\"</span>: <span class=\"hljs-string\"><a href=\\\"#policy\\\">$ref:MqttPolicy</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#policy\">MqttPolicy</a>",
          "link": "#<a href=\"#policy\">-mqtt-policy</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-mqtt-policy-removed",
      "label": "Configuration.MqttPolicyRemoved",
      "link": "#configuration-mqtt-policy-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a MQTT broker policy is removed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"clientId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a MQTT broker policy is removed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"clientId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "configuration-mqtt-server-configuration-changed",
      "label": "Configuration.MqttServerConfigurationChanged",
      "link": "#configuration-mqtt-server-configuration-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the MQTT broker configuration is changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"mqttServerConfiguration\"</span>: <span class=\"hljs-string\"><a href=\\\"#mqtt-server-configuration\\\">$ref:ServerConfiguration</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the MQTT broker configuration is changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"mqttServerConfiguration\"</span>: <span class=\"hljs-string\"><a href=\\\"#mqtt-server-configuration\\\">$ref:ServerConfiguration</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#mqtt-server-configuration\">ServerConfiguration</a>",
          "link": "#<a href=\"#mqtt-server-configuration\">-server-configuration</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-mqtt-server-configuration-removed",
      "label": "Configuration.MqttServerConfigurationRemoved",
      "link": "#configuration-mqtt-server-configuration-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a MQTT server configuration is removed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a MQTT server configuration is removed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "configuration-tcp-server-configuration-changed",
      "label": "Configuration.TcpServerConfigurationChanged",
      "link": "#configuration-tcp-server-configuration-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the TCP server configuration changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"tcpServerConfiguration\"</span>: <span class=\"hljs-string\"><a href=\\\"#tcp-server-configuration\\\">$ref:ServerConfiguration</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the TCP server configuration changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"tcpServerConfiguration\"</span>: <span class=\"hljs-string\"><a href=\\\"#tcp-server-configuration\\\">$ref:ServerConfiguration</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#tcp-server-configuration\">ServerConfiguration</a>",
          "link": "#<a href=\"#tcp-server-configuration\">-server-configuration</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-tcp-server-configuration-removed",
      "label": "Configuration.TcpServerConfigurationRemoved",
      "link": "#configuration-tcp-server-configuration-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a TCP server configuration is removed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a TCP server configuration is removed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "configuration-web-server-configuration-changed",
      "label": "Configuration.WebServerConfigurationChanged",
      "link": "#configuration-web-server-configuration-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the web server configuration changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"webServerConfiguration\"</span>: <span class=\"hljs-string\"><a href=\\\"#web-server-configuration\\\">$ref:WebServerConfiguration</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the web server configuration changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"webServerConfiguration\"</span>: <span class=\"hljs-string\"><a href=\\\"#web-server-configuration\\\">$ref:WebServerConfiguration</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#web-server-configuration\">WebServerConfiguration</a>",
          "link": "#<a href=\"#web-server-configuration\">-web-server-configuration</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-web-server-configuration-removed",
      "label": "Configuration.WebServerConfigurationRemoved",
      "link": "#configuration-web-server-configuration-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a Web server configuration is removed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a Web server configuration is removed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "configuration-web-socket-server-configuration-changed",
      "label": "Configuration.WebSocketServerConfigurationChanged",
      "link": "#configuration-web-socket-server-configuration-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the web socket server configuration changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"webSocketServerConfiguration\"</span>: <span class=\"hljs-string\"><a href=\\\"#web-socket-server-configuration\\\">$ref:ServerConfiguration</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the web socket server configuration changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"webSocketServerConfiguration\"</span>: <span class=\"hljs-string\"><a href=\\\"#web-socket-server-configuration\\\">$ref:ServerConfiguration</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#web-socket-server-configuration\">ServerConfiguration</a>",
          "link": "#<a href=\"#web-socket-server-configuration\">-server-configuration</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "configuration-web-socket-server-configuration-removed",
      "label": "Configuration.WebSocketServerConfigurationRemoved",
      "link": "#configuration-web-socket-server-configuration-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a WebSocket server configuration is removed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a WebSocket server configuration is removed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "devices-device-added",
      "label": "Devices.DeviceAdded",
      "link": "#devices-device-added",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a Device was added.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"device\"</span>: <span class=\"hljs-string\"><a href=\\\"#device\\\">$ref:Device</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a Device was added.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"device\"</span>: <span class=\"hljs-string\"><a href=\\\"#device\\\">$ref:Device</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#device\">Device</a>",
          "link": "#<a href=\"#device\">-device</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-device-changed",
      "label": "Devices.DeviceChanged",
      "link": "#devices-device-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the params, name or setupStatus of a Device changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"device\"</span>: <span class=\"hljs-string\"><a href=\\\"#device\\\">$ref:Device</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the params, name or setupStatus of a Device changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"device\"</span>: <span class=\"hljs-string\"><a href=\\\"#device\\\">$ref:Device</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#device\">Device</a>",
          "link": "#<a href=\"#device\">-device</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-device-removed",
      "label": "Devices.DeviceRemoved",
      "link": "#devices-device-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a Device was removed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a Device was removed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "devices-device-setting-changed",
      "label": "Devices.DeviceSettingChanged",
      "link": "#devices-device-setting-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the setting of a Device is changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"paramTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the setting of a Device is changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"paramTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "devices-event-triggered",
      "label": "Devices.EventTriggered",
      "link": "#devices-event-triggered",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever an Event is triggered.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"event\"</span>: <span class=\"hljs-string\"><a href=\\\"#event\\\">$ref:Event</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever an Event is triggered.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"event\"</span>: <span class=\"hljs-string\"><a href=\\\"#event\\\">$ref:Event</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#event\">Event</a>",
          "link": "#<a href=\"#event\">-event</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-plugin-configuration-changed",
      "label": "Devices.PluginConfigurationChanged",
      "link": "#devices-plugin-configuration-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a plugin's configuration is changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ParamList</a></span>,\n    <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a plugin's configuration is changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#configuration\">ParamList</a>",
          "link": "#<a href=\"#configuration\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "devices-state-changed",
      "label": "Devices.StateChanged",
      "link": "#devices-state-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a State of a device changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a State of a device changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "events-event-triggered",
      "label": "Events.EventTriggered",
      "link": "#events-event-triggered",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Please use Devices.EventTriggered instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever an Event is triggered.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"event\"</span>: <span class=\"hljs-string\"><a href=\\\"#event\\\">$ref:Event</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever an Event is triggered.",
      "deprecated": "Please use Devices.EventTriggered instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"event\"</span>: <span class=\"hljs-string\"><a href=\\\"#event\\\">$ref:Event</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#event\">Event</a>",
          "link": "#<a href=\"#event\">-event</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-event-triggered",
      "label": "Integrations.EventTriggered",
      "link": "#integrations-event-triggered",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever an Event is triggered.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"event\"</span>: <span class=\"hljs-string\"><a href=\\\"#event\\\">$ref:Event</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever an Event is triggered.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"event\"</span>: <span class=\"hljs-string\"><a href=\\\"#event\\\">$ref:Event</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#event\">Event</a>",
          "link": "#<a href=\"#event\">-event</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrationsio-connection-added",
      "label": "Integrations.IOConnectionAdded",
      "link": "#integrationsio-connection-added",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever an IO connection has been added.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ioConnection\"</span>: <span class=\"hljs-string\"><a href=\\\"#io-connection\\\">$ref:IOConnection</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever an IO connection has been added.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"ioConnection\"</span>: <span class=\"hljs-string\"><a href=\\\"#io-connection\\\">$ref:IOConnection</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#io-connection\">IOConnection</a>",
          "link": "#<a href=\"#io-connection\">io-connection</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrationsio-connection-removed",
      "label": "Integrations.IOConnectionRemoved",
      "link": "#integrationsio-connection-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever an IO connection has been removed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ioConnectionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever an IO connection has been removed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"ioConnectionId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "integrations-plugin-configuration-changed",
      "label": "Integrations.PluginConfigurationChanged",
      "link": "#integrations-plugin-configuration-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a plugin's configuration is changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ParamList</a></span>,\n    <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a plugin's configuration is changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"configuration\"</span>: <span class=\"hljs-string\"><a href=\\\"#configuration\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#configuration\">ParamList</a>",
          "link": "#<a href=\"#configuration\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-state-changed",
      "label": "Integrations.StateChanged",
      "link": "#integrations-state-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a state of a thing changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a state of a thing changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "integrations-thing-added",
      "label": "Integrations.ThingAdded",
      "link": "#integrations-thing-added",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a thing was added.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"thing\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing\\\">$ref:Thing</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a thing was added.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"thing\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing\\\">$ref:Thing</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#thing\">Thing</a>",
          "link": "#<a href=\"#thing\">-thing</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-thing-changed",
      "label": "Integrations.ThingChanged",
      "link": "#integrations-thing-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the params or name of a thing are changed (by EditThing or ReconfigureThing).\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"thing\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing\\\">$ref:Thing</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the params or name of a thing are changed (by EditThing or ReconfigureThing).",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"thing\"</span>: <span class=\"hljs-string\"><a href=\\\"#thing\\\">$ref:Thing</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#thing\">Thing</a>",
          "link": "#<a href=\"#thing\">-thing</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integrations-thing-removed",
      "label": "Integrations.ThingRemoved",
      "link": "#integrations-thing-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a thing was removed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a thing was removed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "integrations-thing-setting-changed",
      "label": "Integrations.ThingSettingChanged",
      "link": "#integrations-thing-setting-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the setting of a thing is changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"paramTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the setting of a thing is changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"paramTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-cloud-connected-changed",
      "label": "JSONRPC.CloudConnectedChanged",
      "link": "#jsonrpc-cloud-connected-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the cloud connection status changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"connected\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"connectionState\"</span>: <span class=\"hljs-string\"><a href=\\\"#connection-state\\\">$ref:CloudConnectionState</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the cloud connection status changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"connected\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"connectionState\"</span>: <span class=\"hljs-string\"><a href=\\\"#connection-state\\\">$ref:CloudConnectionState</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#connection-state\">CloudConnectionState</a>",
          "link": "#<a href=\"#connection-state\">-cloud-connection-state</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "jsonrpc-push-button-auth-finished",
      "label": "JSONRPC.PushButtonAuthFinished",
      "link": "#jsonrpc-push-button-auth-finished",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"deprecated\"</span>: <span class=\"hljs-string\">\"Use Users.PushButtonAuthFinished instead.\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted when a push button authentication reaches final state. NOTE: This notification is special. It will only be emitted to connections that did actively request a push button authentication, but also it will be emitted regardless of the notification settings. \"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:token\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"transactionId\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n  &#125;\n&#125;",
      "description": "Emitted when a push button authentication reaches final state. NOTE: This notification is special. It will only be emitted to connections that did actively request a push button authentication, but also it will be emitted regardless of the notification settings. ",
      "deprecated": "Use Users.PushButtonAuthFinished instead.",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:token\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"transactionId\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "logging-log-database-updated",
      "label": "Logging.LogDatabaseUpdated",
      "link": "#logging-log-database-updated",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the database was updated. The database will be updated when a log entry was deleted. A log entry will be deleted when the corresponding thing or a rule will be removed, or when the oldest entry of the database was deleted to keep to database in the size limits.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;&#125;\n&#125;",
      "description": "Emitted whenever the database was updated. The database will be updated when a log entry was deleted. A log entry will be deleted when the corresponding thing or a rule will be removed, or when the oldest entry of the database was deleted to keep to database in the size limits.",
      "deprecated": "",
      "params": "&#123;&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "logging-log-entry-added",
      "label": "Logging.LogEntryAdded",
      "link": "#logging-log-entry-added",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever an entry is appended to the logging system. \"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"logEntry\"</span>: <span class=\"hljs-string\"><a href=\\\"#log-entry\\\">$ref:LogEntry</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever an entry is appended to the logging system. ",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"logEntry\"</span>: <span class=\"hljs-string\"><a href=\\\"#log-entry\\\">$ref:LogEntry</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#log-entry\">LogEntry</a>",
          "link": "#<a href=\"#log-entry\">-log-entry</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-network-status-changed",
      "label": "NetworkManager.NetworkStatusChanged",
      "link": "#network-manager-network-status-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a status of a NetworkManager changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"status\"</span>: &#123;\n      <span class=\"hljs-attr\">\"networkingEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n      <span class=\"hljs-attr\">\"state\"</span>: <span class=\"hljs-string\">\"$ref:NetworkManagerState\"</span>,\n      <span class=\"hljs-attr\">\"wirelessNetworkingEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n    &#125;\n  &#125;\n&#125;",
      "description": "Emitted whenever a status of a NetworkManager changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"status\"</span>: &#123;\n    <span class=\"hljs-attr\">\"networkingEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"state\"</span>: <span class=\"hljs-string\">\"$ref:NetworkManagerState\"</span>,\n    <span class=\"hljs-attr\">\"wirelessNetworkingEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "NetworkManagerState",
          "link": "#network-manager-state"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-wired-network-device-added",
      "label": "NetworkManager.WiredNetworkDeviceAdded",
      "link": "#network-manager-wired-network-device-added",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a new WiredNetworkDevice was added.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"wiredNetworkDevice\"</span>: <span class=\"hljs-string\"><a href=\\\"#wired-network-device\\\">$ref:WiredNetworkDevice</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a new WiredNetworkDevice was added.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"wiredNetworkDevice\"</span>: <span class=\"hljs-string\"><a href=\\\"#wired-network-device\\\">$ref:WiredNetworkDevice</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#wired-network-device\">WiredNetworkDevice</a>",
          "link": "#<a href=\"#wired-network-device\">-wired-network-device</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-wired-network-device-changed",
      "label": "NetworkManager.WiredNetworkDeviceChanged",
      "link": "#network-manager-wired-network-device-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the given WiredNetworkDevice has changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"wiredNetworkDevice\"</span>: <span class=\"hljs-string\"><a href=\\\"#wired-network-device\\\">$ref:WiredNetworkDevice</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the given WiredNetworkDevice has changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"wiredNetworkDevice\"</span>: <span class=\"hljs-string\"><a href=\\\"#wired-network-device\\\">$ref:WiredNetworkDevice</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#wired-network-device\">WiredNetworkDevice</a>",
          "link": "#<a href=\"#wired-network-device\">-wired-network-device</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-wired-network-device-removed",
      "label": "NetworkManager.WiredNetworkDeviceRemoved",
      "link": "#network-manager-wired-network-device-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a WiredNetworkDevice was removed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a WiredNetworkDevice was removed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "network-manager-wireless-network-device-added",
      "label": "NetworkManager.WirelessNetworkDeviceAdded",
      "link": "#network-manager-wireless-network-device-added",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a new WirelessNetworkDevice was added.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"wirelessNetworkDevice\"</span>: <span class=\"hljs-string\"><a href=\\\"#wireless-network-device\\\">$ref:WirelessNetworkDevice</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a new WirelessNetworkDevice was added.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"wirelessNetworkDevice\"</span>: <span class=\"hljs-string\"><a href=\\\"#wireless-network-device\\\">$ref:WirelessNetworkDevice</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#wireless-network-device\">WirelessNetworkDevice</a>",
          "link": "#<a href=\"#wireless-network-device\">-wireless-network-device</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-wireless-network-device-changed",
      "label": "NetworkManager.WirelessNetworkDeviceChanged",
      "link": "#network-manager-wireless-network-device-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the given WirelessNetworkDevice has changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"wirelessNetworkDevice\"</span>: <span class=\"hljs-string\"><a href=\\\"#wireless-network-device\\\">$ref:WirelessNetworkDevice</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the given WirelessNetworkDevice has changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"wirelessNetworkDevice\"</span>: <span class=\"hljs-string\"><a href=\\\"#wireless-network-device\\\">$ref:WirelessNetworkDevice</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#wireless-network-device\">WirelessNetworkDevice</a>",
          "link": "#<a href=\"#wireless-network-device\">-wireless-network-device</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "network-manager-wireless-network-device-removed",
      "label": "NetworkManager.WirelessNetworkDeviceRemoved",
      "link": "#network-manager-wireless-network-device-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a WirelessNetworkDevice was removed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a WirelessNetworkDevice was removed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"interface\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "rules-rule-active-changed",
      "label": "Rules.RuleActiveChanged",
      "link": "#rules-rule-active-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the active state of a Rule changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"active\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the active state of a Rule changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"active\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "rules-rule-added",
      "label": "Rules.RuleAdded",
      "link": "#rules-rule-added",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a Rule was added.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"rule\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule\\\">$ref:Rule</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a Rule was added.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"rule\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule\\\">$ref:Rule</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#rule\">Rule</a>",
          "link": "#<a href=\"#rule\">-rule</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rules-rule-configuration-changed",
      "label": "Rules.RuleConfigurationChanged",
      "link": "#rules-rule-configuration-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the configuration of a Rule changed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"rule\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule\\\">$ref:Rule</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the configuration of a Rule changed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"rule\"</span>: <span class=\"hljs-string\"><a href=\\\"#rule\\\">$ref:Rule</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#rule\">Rule</a>",
          "link": "#<a href=\"#rule\">-rule</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rules-rule-removed",
      "label": "Rules.RuleRemoved",
      "link": "#rules-rule-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a Rule was removed.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a Rule was removed.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "scripts-script-added",
      "label": "Scripts.ScriptAdded",
      "link": "#scripts-script-added",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted when a script has been added to the system.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"script\"</span>: <span class=\"hljs-string\"><a href=\\\"#script\\\">$ref:Script</a></span>\n  &#125;\n&#125;",
      "description": "Emitted when a script has been added to the system.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"script\"</span>: <span class=\"hljs-string\"><a href=\\\"#script\\\">$ref:Script</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#script\">Script</a>",
          "link": "#<a href=\"#script\">-script</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "scripts-script-changed",
      "label": "Scripts.ScriptChanged",
      "link": "#scripts-script-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted when a script has been changed in the system (e.g. renamed).\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"scriptId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;\n&#125;",
      "description": "Emitted when a script has been changed in the system (e.g. renamed).",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"scriptId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "scripts-script-content-changed",
      "label": "Scripts.ScriptContentChanged",
      "link": "#scripts-script-content-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted when a script's content has been changed in the system.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"scriptId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;\n&#125;",
      "description": "Emitted when a script's content has been changed in the system.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"scriptId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "scripts-script-log-message",
      "label": "Scripts.ScriptLogMessage",
      "link": "#scripts-script-log-message",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted when a script produces a console message.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"message\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"scriptId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n    <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\"><a href=\\\"#type\\\">$ref:ScriptMessageType</a></span>\n  &#125;\n&#125;",
      "description": "Emitted when a script produces a console message.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"message\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"scriptId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\"><a href=\\\"#type\\\">$ref:ScriptMessageType</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#type\">ScriptMessageType</a>",
          "link": "#<a href=\"#type\">-script-message-type</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "scripts-script-removed",
      "label": "Scripts.ScriptRemoved",
      "link": "#scripts-script-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted when a script has been removed from the system.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n  &#125;\n&#125;",
      "description": "Emitted when a script has been removed from the system.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-capabilities-changed",
      "label": "System.CapabilitiesChanged",
      "link": "#system-capabilities-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the system capabilities change.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"powerManagement\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"updateManagement\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the system capabilities change.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"powerManagement\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"updateManagement\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-package-added",
      "label": "System.PackageAdded",
      "link": "#system-package-added",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a package is added to the list of packages.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"package\"</span>: <span class=\"hljs-string\"><a href=\\\"#package\\\">$ref:Package</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a package is added to the list of packages.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"package\"</span>: <span class=\"hljs-string\"><a href=\\\"#package\\\">$ref:Package</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#package\">Package</a>",
          "link": "#<a href=\"#package\">-package</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "system-package-changed",
      "label": "System.PackageChanged",
      "link": "#system-package-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a package in the list of packages changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"package\"</span>: <span class=\"hljs-string\"><a href=\\\"#package\\\">$ref:Package</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a package in the list of packages changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"package\"</span>: <span class=\"hljs-string\"><a href=\\\"#package\\\">$ref:Package</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#package\">Package</a>",
          "link": "#<a href=\"#package\">-package</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "system-package-removed",
      "label": "System.PackageRemoved",
      "link": "#system-package-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a package is removed from the list of packages.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"packageId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a package is removed from the list of packages.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"packageId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-repository-added",
      "label": "System.RepositoryAdded",
      "link": "#system-repository-added",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a repository is added to the list of repositories.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"repository\"</span>: <span class=\"hljs-string\"><a href=\\\"#repository\\\">$ref:Repository</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a repository is added to the list of repositories.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"repository\"</span>: <span class=\"hljs-string\"><a href=\\\"#repository\\\">$ref:Repository</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#repository\">Repository</a>",
          "link": "#<a href=\"#repository\">-repository</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "system-repository-changed",
      "label": "System.RepositoryChanged",
      "link": "#system-repository-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a repository in the list of repositories changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"repository\"</span>: <span class=\"hljs-string\"><a href=\\\"#repository\\\">$ref:Repository</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a repository in the list of repositories changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"repository\"</span>: <span class=\"hljs-string\"><a href=\\\"#repository\\\">$ref:Repository</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#repository\">Repository</a>",
          "link": "#<a href=\"#repository\">-repository</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "system-repository-removed",
      "label": "System.RepositoryRemoved",
      "link": "#system-repository-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a repository is removed from the list of repositories.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"repositoryId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a repository is removed from the list of repositories.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"repositoryId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-time-configuration-changed",
      "label": "System.TimeConfigurationChanged",
      "link": "#system-time-configuration-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the time configuration is changed\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"automaticTime\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"automaticTimeAvailable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"time\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n    <span class=\"hljs-attr\">\"timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the time configuration is changed",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"automaticTime\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"automaticTimeAvailable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"time\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n  <span class=\"hljs-attr\">\"timeZone\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "system-update-status-changed",
      "label": "System.UpdateStatusChanged",
      "link": "#system-update-status-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever the update status changes.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"busy\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"updateRunning\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n  &#125;\n&#125;",
      "description": "Emitted whenever the update status changes.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"busy\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"updateRunning\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "tags-tag-added",
      "label": "Tags.TagAdded",
      "link": "#tags-tag-added",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a tag is added to the system. \"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"tag\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag\\\">$ref:Tag</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a tag is added to the system. ",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"tag\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag\\\">$ref:Tag</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#tag\">Tag</a>",
          "link": "#<a href=\"#tag\">-tag</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "tags-tag-removed",
      "label": "Tags.TagRemoved",
      "link": "#tags-tag-removed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a tag is removed from the system. \"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"tag\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag\\\">$ref:Tag</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a tag is removed from the system. ",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"tag\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag\\\">$ref:Tag</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#tag\">Tag</a>",
          "link": "#<a href=\"#tag\">-tag</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "tags-tag-value-changed",
      "label": "Tags.TagValueChanged",
      "link": "#tags-tag-value-changed",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted whenever a tag's value is changed in the system. \"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"tag\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag\\\">$ref:Tag</a></span>\n  &#125;\n&#125;",
      "description": "Emitted whenever a tag's value is changed in the system. ",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"tag\"</span>: <span class=\"hljs-string\"><a href=\\\"#tag\\\">$ref:Tag</a></span>\n&#125;",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#tag\">Tag</a>",
          "link": "#<a href=\"#tag\">-tag</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "users-push-button-auth-finished",
      "label": "Users.PushButtonAuthFinished",
      "link": "#users-push-button-auth-finished",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"Emitted when a push button authentication reaches final state. NOTE: This notification is special. It will only be emitted to connections that did actively request a push button authentication, but also it will be emitted regardless of the notification settings.\"</span>,\n  <span class=\"hljs-attr\">\"params\"</span>: &#123;\n    <span class=\"hljs-attr\">\"o:token\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n    <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n    <span class=\"hljs-attr\">\"transactionId\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n  &#125;\n&#125;",
      "description": "Emitted when a push button authentication reaches final state. NOTE: This notification is special. It will only be emitted to connections that did actively request a push button authentication, but also it will be emitted regardless of the notification settings.",
      "deprecated": "",
      "params": "&#123;\n  <span class=\"hljs-attr\">\"o:token\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"success\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"transactionId\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n&#125;",
      "returns": "",
      "references": [],
      "deprecations": ""
    }
  ],
  "types": [
    {
      "id": "action",
      "label": "Action",
      "link": "#action",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"d:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:params\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#o:params\">ParamList</a>",
          "link": "#<a href=\"#o:params\">-param-list</a>"
        }
      ],
      "deprecations": "deviceId"
    },
    {
      "id": "action-type",
      "label": "ActionType",
      "link": "#action-type",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"index\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"paramTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#param-types\\\">$ref:ParamTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#param-types\">ParamTypes</a>",
          "link": "#<a href=\"#param-types\">-param-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "action-types",
      "label": "ActionTypes",
      "link": "#action-types",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:ActionType\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "ActionType",
          "link": "#action-type"
        }
      ],
      "deprecations": []
    },
    {
      "id": "browser-item",
      "label": "BrowserItem",
      "link": "#browser-item",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"actionTypeIds\"</span>: [\n    <span class=\"hljs-string\">\"Uuid\"</span>\n  ],\n  <span class=\"hljs-attr\">\"browsable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"description\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"disabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"executable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"icon\"</span>: <span class=\"hljs-string\"><a href=\\\"#icon\\\">$ref:BrowserIcon</a></span>,\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:mediaIcon\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:media-icon\\\">$ref:MediaBrowserIcon</a></span>,\n  <span class=\"hljs-attr\">\"thumbnail\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "String",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#icon\">BrowserIcon</a>",
          "link": "#<a href=\"#icon\">-browser-icon</a>"
        },
        {
          "label": "<a href=\"#o:media-icon\">MediaBrowserIcon</a>",
          "link": "#<a href=\"#o:media-icon\">-media-browser-icon</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "cache-hash",
      "label": "CacheHash",
      "link": "#cache-hash",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"hash\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"method\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "calendar-item",
      "label": "CalendarItem",
      "link": "#calendar-item",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"duration\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n  <span class=\"hljs-attr\">\"o:datetime\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n  <span class=\"hljs-attr\">\"o:repeating\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:repeating\\\">$ref:RepeatingOption</a></span>,\n  <span class=\"hljs-attr\">\"o:startTime\"</span>: <span class=\"hljs-string\">\"Time\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#o:repeating\">RepeatingOption</a>",
          "link": "#<a href=\"#o:repeating\">-repeating-option</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "calendar-items",
      "label": "CalendarItems",
      "link": "#calendar-items",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:CalendarItem\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "CalendarItem",
          "link": "#calendar-item"
        }
      ],
      "deprecations": []
    },
    {
      "id": "device",
      "label": "Device",
      "link": "#device",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"d:r:setupComplete\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"o:name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:settings\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:settings\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"r:deviceClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:o:parentId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:o:setupDisplayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:params\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"r:setupError\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:setup-error\\\">$ref:ThingError</a></span>,\n  <span class=\"hljs-attr\">\"r:setupStatus\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:setup-status\\\">$ref:ThingSetupStatus</a></span>,\n  <span class=\"hljs-attr\">\"r:states\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:states\\\">$ref:States</a></span>,\n  <span class=\"hljs-attr\">\"r:thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#o:settings\">ParamList</a>",
          "link": "#<a href=\"#o:settings\">-param-list</a>"
        },
        {
          "label": "<a href=\"#r:params\">ParamList</a>",
          "link": "#<a href=\"#r:params\">-param-list</a>"
        },
        {
          "label": "<a href=\"#r:setup-error\">ThingError</a>",
          "link": "#<a href=\"#r:setup-error\">-thing-error</a>"
        },
        {
          "label": "<a href=\"#r:setup-status\">ThingSetupStatus</a>",
          "link": "#<a href=\"#r:setup-status\">-thing-setup-status</a>"
        },
        {
          "label": "<a href=\"#r:states\">States</a>",
          "link": "#<a href=\"#r:states\">-states</a>"
        }
      ],
      "deprecations": "r:setupComplete"
    },
    {
      "id": "device-class",
      "label": "DeviceClass",
      "link": "#device-class",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:actionTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:action-types\\\">$ref:ActionTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:browsable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"r:browserItemActionTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:browser-item-action-types\\\">$ref:ActionTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:createMethods\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:create-methods\\\">$ref:CreateMethods</a></span>,\n  <span class=\"hljs-attr\">\"r:discoveryParamTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:discovery-param-types\\\">$ref:ParamTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:eventTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:event-types\\\">$ref:EventTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:interfaces\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n  <span class=\"hljs-attr\">\"r:name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:paramTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:param-types\\\">$ref:ParamTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:settingsTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:settings-types\\\">$ref:ParamTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:setupMethod\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:setup-method\\\">$ref:SetupMethod</a></span>,\n  <span class=\"hljs-attr\">\"r:stateTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:state-types\\\">$ref:StateTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:vendorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#r:action-types\">ActionTypes</a>",
          "link": "#<a href=\"#r:action-types\">-action-types</a>"
        },
        {
          "label": "<a href=\"#r:browser-item-action-types\">ActionTypes</a>",
          "link": "#<a href=\"#r:browser-item-action-types\">-action-types</a>"
        },
        {
          "label": "<a href=\"#r:create-methods\">CreateMethods</a>",
          "link": "#<a href=\"#r:create-methods\">-create-methods</a>"
        },
        {
          "label": "<a href=\"#r:discovery-param-types\">ParamTypes</a>",
          "link": "#<a href=\"#r:discovery-param-types\">-param-types</a>"
        },
        {
          "label": "<a href=\"#r:event-types\">EventTypes</a>",
          "link": "#<a href=\"#r:event-types\">-event-types</a>"
        },
        {
          "label": "<a href=\"#r:param-types\">ParamTypes</a>",
          "link": "#<a href=\"#r:param-types\">-param-types</a>"
        },
        {
          "label": "<a href=\"#r:settings-types\">ParamTypes</a>",
          "link": "#<a href=\"#r:settings-types\">-param-types</a>"
        },
        {
          "label": "<a href=\"#r:setup-method\">SetupMethod</a>",
          "link": "#<a href=\"#r:setup-method\">-setup-method</a>"
        },
        {
          "label": "<a href=\"#r:state-types\">StateTypes</a>",
          "link": "#<a href=\"#r:state-types\">-state-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "device-classes",
      "label": "DeviceClasses",
      "link": "#device-classes",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:DeviceClass\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "DeviceClass",
          "link": "#device-class"
        }
      ],
      "deprecations": []
    },
    {
      "id": "device-descriptor",
      "label": "DeviceDescriptor",
      "link": "#device-descriptor",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:description\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:deviceParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:device-params\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:title\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#r:device-params\">ParamList</a>",
          "link": "#<a href=\"#r:device-params\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "device-descriptors",
      "label": "DeviceDescriptors",
      "link": "#device-descriptors",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:DeviceDescriptor\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "DeviceDescriptor",
          "link": "#device-descriptor"
        }
      ],
      "deprecations": []
    },
    {
      "id": "device-plugin",
      "label": "DevicePlugin",
      "link": "#device-plugin",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:paramTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:param-types\\\">$ref:ParamTypes</a></span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#r:param-types\">ParamTypes</a>",
          "link": "#<a href=\"#r:param-types\">-param-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "device-plugins",
      "label": "DevicePlugins",
      "link": "#device-plugins",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:DevicePlugin\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "DevicePlugin",
          "link": "#device-plugin"
        }
      ],
      "deprecations": []
    },
    {
      "id": "devices",
      "label": "Devices",
      "link": "#devices",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:Device\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "Device",
          "link": "#device"
        }
      ],
      "deprecations": []
    },
    {
      "id": "event",
      "label": "Event",
      "link": "#event",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"d:r:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:eventTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:params\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"r:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#r:params\">ParamList</a>",
          "link": "#<a href=\"#r:params\">-param-list</a>"
        }
      ],
      "deprecations": "r:deviceId"
    },
    {
      "id": "event-descriptor",
      "label": "EventDescriptor",
      "link": "#event-descriptor",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"d:o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:eventTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:interface\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:interfaceEvent\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:paramDescriptors\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:param-descriptors\\\">$ref:ParamDescriptors</a></span>,\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#o:param-descriptors\">ParamDescriptors</a>",
          "link": "#<a href=\"#o:param-descriptors\">-param-descriptors</a>"
        }
      ],
      "deprecations": "o:deviceId"
    },
    {
      "id": "event-descriptors",
      "label": "EventDescriptors",
      "link": "#event-descriptors",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:EventDescriptor\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "EventDescriptor",
          "link": "#event-descriptor"
        }
      ],
      "deprecations": []
    },
    {
      "id": "event-type",
      "label": "EventType",
      "link": "#event-type",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"paramTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#param-types\\\">$ref:ParamTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:index\"</span>: <span class=\"hljs-string\">\"Int\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#param-types\">ParamTypes</a>",
          "link": "#<a href=\"#param-types\">-param-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "event-types",
      "label": "EventTypes",
      "link": "#event-types",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:EventType\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "EventType",
          "link": "#event-type"
        }
      ],
      "deprecations": []
    },
    {
      "id": "experience",
      "label": "Experience",
      "link": "#experience",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"version\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "io-connection",
      "label": "IOConnection",
      "link": "#io-connection",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:inputStateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:inputThingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:inverted\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"r:outputStateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:outputThingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "io-connections",
      "label": "IOConnections",
      "link": "#io-connections",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:IOConnection\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "IOConnection",
          "link": "#io-connection"
        }
      ],
      "deprecations": []
    },
    {
      "id": "integration-plugin",
      "label": "IntegrationPlugin",
      "link": "#integration-plugin",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:paramTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:param-types\\\">$ref:ParamTypes</a></span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#r:param-types\">ParamTypes</a>",
          "link": "#<a href=\"#r:param-types\">-param-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "integration-plugins",
      "label": "IntegrationPlugins",
      "link": "#integration-plugins",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:IntegrationPlugin\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "IntegrationPlugin",
          "link": "#integration-plugin"
        }
      ],
      "deprecations": []
    },
    {
      "id": "log-entries",
      "label": "LogEntries",
      "link": "#log-entries",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:LogEntry\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "LogEntry",
          "link": "#log-entry"
        }
      ],
      "deprecations": []
    },
    {
      "id": "log-entry",
      "label": "LogEntry",
      "link": "#log-entry",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"d:r:o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:loggingLevel\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:logging-level\\\">$ref:LoggingLevel</a></span>,\n  <span class=\"hljs-attr\">\"r:o:active\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"r:o:errorCode\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:o:eventType\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:o:event-type\\\">$ref:LoggingEventType</a></span>,\n  <span class=\"hljs-attr\">\"r:o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:o:typeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:o:value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>,\n  <span class=\"hljs-attr\">\"r:source\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:source\\\">$ref:LoggingSource</a></span>,\n  <span class=\"hljs-attr\">\"r:timestamp\"</span>: <span class=\"hljs-string\">\"Uint\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#r:logging-level\">LoggingLevel</a>",
          "link": "#<a href=\"#r:logging-level\">-logging-level</a>"
        },
        {
          "label": "<a href=\"#r:o:event-type\">LoggingEventType</a>",
          "link": "#<a href=\"#r:o:event-type\">-logging-event-type</a>"
        },
        {
          "label": "<a href=\"#r:source\">LoggingSource</a>",
          "link": "#<a href=\"#r:source\">-logging-source</a>"
        }
      ],
      "deprecations": "r:o:deviceId"
    },
    {
      "id": "mqtt-policy",
      "label": "MqttPolicy",
      "link": "#mqtt-policy",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"allowedPublishTopicFilters\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n  <span class=\"hljs-attr\">\"allowedSubscribeTopicFilters\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n  <span class=\"hljs-attr\">\"clientId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"password\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"username\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "package",
      "label": "Package",
      "link": "#package",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:canRemove\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"r:candidateVersion\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:changelog\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:installedVersion\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:rollbackAvailable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"r:summary\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:updateAvailable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "packages",
      "label": "Packages",
      "link": "#packages",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:Package\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "Package",
          "link": "#package"
        }
      ],
      "deprecations": []
    },
    {
      "id": "param",
      "label": "Param",
      "link": "#param",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"o:paramTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "param-descriptor",
      "label": "ParamDescriptor",
      "link": "#param-descriptor",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"o:paramName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:paramTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"operator\"</span>: <span class=\"hljs-string\"><a href=\\\"#operator\\\">$ref:ValueOperator</a></span>,\n  <span class=\"hljs-attr\">\"value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#operator\">ValueOperator</a>",
          "link": "#<a href=\"#operator\">-value-operator</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "param-descriptors",
      "label": "ParamDescriptors",
      "link": "#param-descriptors",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:ParamDescriptor\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "ParamDescriptor",
          "link": "#param-descriptor"
        }
      ],
      "deprecations": []
    },
    {
      "id": "param-list",
      "label": "ParamList",
      "link": "#param-list",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:Param\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "Param",
          "link": "#param"
        }
      ],
      "deprecations": []
    },
    {
      "id": "param-type",
      "label": "ParamType",
      "link": "#param-type",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"index\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:allowedValues\"</span>: [\n    <span class=\"hljs-string\">\"Variant\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:defaultValue\"</span>: <span class=\"hljs-string\">\"Variant\"</span>,\n  <span class=\"hljs-attr\">\"o:inputType\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:input-type\\\">$ref:InputType</a></span>,\n  <span class=\"hljs-attr\">\"o:maxValue\"</span>: <span class=\"hljs-string\">\"Variant\"</span>,\n  <span class=\"hljs-attr\">\"o:minValue\"</span>: <span class=\"hljs-string\">\"Variant\"</span>,\n  <span class=\"hljs-attr\">\"o:readOnly\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"o:unit\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:unit\\\">$ref:Unit</a></span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\"><a href=\\\"#type\\\">$ref:BasicType</a></span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#o:input-type\">InputType</a>",
          "link": "#<a href=\"#o:input-type\">-input-type</a>"
        },
        {
          "label": "<a href=\"#o:unit\">Unit</a>",
          "link": "#<a href=\"#o:unit\">-unit</a>"
        },
        {
          "label": "<a href=\"#type\">BasicType</a>",
          "link": "#<a href=\"#type\">-basic-type</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "param-types",
      "label": "ParamTypes",
      "link": "#param-types",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:ParamType\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "ParamType",
          "link": "#param-type"
        }
      ],
      "deprecations": []
    },
    {
      "id": "repeating-option",
      "label": "RepeatingOption",
      "link": "#repeating-option",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"mode\"</span>: <span class=\"hljs-string\"><a href=\\\"#mode\\\">$ref:RepeatingMode</a></span>,\n  <span class=\"hljs-attr\">\"o:monthDays\"</span>: [\n    <span class=\"hljs-string\">\"Int\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:weekDays\"</span>: [\n    <span class=\"hljs-string\">\"Int\"</span>\n  ]\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#mode\">RepeatingMode</a>",
          "link": "#<a href=\"#mode\">-repeating-mode</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "repositories",
      "label": "Repositories",
      "link": "#repositories",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:Repository\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "Repository",
          "link": "#repository"
        }
      ],
      "deprecations": []
    },
    {
      "id": "repository",
      "label": "Repository",
      "link": "#repository",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"r:displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "rule",
      "label": "Rule",
      "link": "#rule",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"actions\"</span>: <span class=\"hljs-string\"><a href=\\\"#actions\\\">$ref:RuleActions</a></span>,\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"o:eventDescriptors\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:event-descriptors\\\">$ref:EventDescriptors</a></span>,\n  <span class=\"hljs-attr\">\"o:executable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"o:exitActions\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:exit-actions\\\">$ref:RuleActions</a></span>,\n  <span class=\"hljs-attr\">\"o:stateEvaluator\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:state-evaluator\\\">$ref:StateEvaluator</a></span>,\n  <span class=\"hljs-attr\">\"o:timeDescriptor\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:time-descriptor\\\">$ref:TimeDescriptor</a></span>,\n  <span class=\"hljs-attr\">\"r:active\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#actions\">RuleActions</a>",
          "link": "#<a href=\"#actions\">-rule-actions</a>"
        },
        {
          "label": "<a href=\"#o:event-descriptors\">EventDescriptors</a>",
          "link": "#<a href=\"#o:event-descriptors\">-event-descriptors</a>"
        },
        {
          "label": "<a href=\"#o:exit-actions\">RuleActions</a>",
          "link": "#<a href=\"#o:exit-actions\">-rule-actions</a>"
        },
        {
          "label": "<a href=\"#o:state-evaluator\">StateEvaluator</a>",
          "link": "#<a href=\"#o:state-evaluator\">-state-evaluator</a>"
        },
        {
          "label": "<a href=\"#o:time-descriptor\">TimeDescriptor</a>",
          "link": "#<a href=\"#o:time-descriptor\">-time-descriptor</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "rule-action",
      "label": "RuleAction",
      "link": "#rule-action",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"d:o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:actionTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:browserItemId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:interface\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:interfaceAction\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:ruleActionParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:rule-action-params\\\">$ref:RuleActionParams</a></span>,\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#o:rule-action-params\">RuleActionParams</a>",
          "link": "#<a href=\"#o:rule-action-params\">-rule-action-params</a>"
        }
      ],
      "deprecations": "o:deviceId"
    },
    {
      "id": "rule-action-param",
      "label": "RuleActionParam",
      "link": "#rule-action-param",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"d:o:stateDeviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:eventParamTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:eventTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:paramName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:paramTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:stateThingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": "o:stateDeviceId"
    },
    {
      "id": "rule-action-params",
      "label": "RuleActionParams",
      "link": "#rule-action-params",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:RuleActionParam\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "RuleActionParam",
          "link": "#rule-action-param"
        }
      ],
      "deprecations": []
    },
    {
      "id": "rule-actions",
      "label": "RuleActions",
      "link": "#rule-actions",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:RuleAction\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "RuleAction",
          "link": "#rule-action"
        }
      ],
      "deprecations": []
    },
    {
      "id": "rule-description",
      "label": "RuleDescription",
      "link": "#rule-description",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"active\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"enabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"executable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "rules",
      "label": "Rules",
      "link": "#rules",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:Rule\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "Rule",
          "link": "#rule"
        }
      ],
      "deprecations": []
    },
    {
      "id": "script",
      "label": "Script",
      "link": "#script",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "scripts",
      "label": "Scripts",
      "link": "#scripts",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:Script\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "Script",
          "link": "#script"
        }
      ],
      "deprecations": []
    },
    {
      "id": "server-configuration",
      "label": "ServerConfiguration",
      "link": "#server-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"address\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"authenticationEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"port\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n  <span class=\"hljs-attr\">\"sslEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "state",
      "label": "State",
      "link": "#state",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "state-descriptor",
      "label": "StateDescriptor",
      "link": "#state-descriptor",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"d:o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:interface\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:interfaceState\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:stateTypeId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"operator\"</span>: <span class=\"hljs-string\"><a href=\\\"#operator\\\">$ref:ValueOperator</a></span>,\n  <span class=\"hljs-attr\">\"value\"</span>: <span class=\"hljs-string\">\"Variant\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#operator\">ValueOperator</a>",
          "link": "#<a href=\"#operator\">-value-operator</a>"
        }
      ],
      "deprecations": "o:deviceId"
    },
    {
      "id": "state-evaluator",
      "label": "StateEvaluator",
      "link": "#state-evaluator",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"o:childEvaluators\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:child-evaluators\\\">$ref:StateEvaluators</a></span>,\n  <span class=\"hljs-attr\">\"o:operator\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:operator\\\">$ref:StateOperator</a></span>,\n  <span class=\"hljs-attr\">\"o:stateDescriptor\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:state-descriptor\\\">$ref:StateDescriptor</a></span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#o:child-evaluators\">StateEvaluators</a>",
          "link": "#<a href=\"#o:child-evaluators\">-state-evaluators</a>"
        },
        {
          "label": "<a href=\"#o:operator\">StateOperator</a>",
          "link": "#<a href=\"#o:operator\">-state-operator</a>"
        },
        {
          "label": "<a href=\"#o:state-descriptor\">StateDescriptor</a>",
          "link": "#<a href=\"#o:state-descriptor\">-state-descriptor</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "state-evaluators",
      "label": "StateEvaluators",
      "link": "#state-evaluators",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:StateEvaluator\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "StateEvaluator",
          "link": "#state-evaluator"
        }
      ],
      "deprecations": []
    },
    {
      "id": "state-type",
      "label": "StateType",
      "link": "#state-type",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"defaultValue\"</span>: <span class=\"hljs-string\">\"Variant\"</span>,\n  <span class=\"hljs-attr\">\"displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"index\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:ioType\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:io-type\\\">$ref:IOType</a></span>,\n  <span class=\"hljs-attr\">\"o:maxValue\"</span>: <span class=\"hljs-string\">\"Variant\"</span>,\n  <span class=\"hljs-attr\">\"o:minValue\"</span>: <span class=\"hljs-string\">\"Variant\"</span>,\n  <span class=\"hljs-attr\">\"o:possibleValues\"</span>: [\n    <span class=\"hljs-string\">\"Variant\"</span>\n  ],\n  <span class=\"hljs-attr\">\"o:unit\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:unit\\\">$ref:Unit</a></span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\"><a href=\\\"#type\\\">$ref:BasicType</a></span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#o:io-type\">IOType</a>",
          "link": "#<a href=\"#o:io-type\">io-type</a>"
        },
        {
          "label": "<a href=\"#o:unit\">Unit</a>",
          "link": "#<a href=\"#o:unit\">-unit</a>"
        },
        {
          "label": "<a href=\"#type\">BasicType</a>",
          "link": "#<a href=\"#type\">-basic-type</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "state-types",
      "label": "StateTypes",
      "link": "#state-types",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:StateType\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "StateType",
          "link": "#state-type"
        }
      ],
      "deprecations": []
    },
    {
      "id": "states",
      "label": "States",
      "link": "#states",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:State\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "State",
          "link": "#state"
        }
      ],
      "deprecations": []
    },
    {
      "id": "tag",
      "label": "Tag",
      "link": "#tag",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"appId\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"d:o:deviceId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:ruleId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"o:value\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"tagId\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": "o:deviceId"
    },
    {
      "id": "tags",
      "label": "Tags",
      "link": "#tags",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:Tag\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "Tag",
          "link": "#tag"
        }
      ],
      "deprecations": []
    },
    {
      "id": "thing",
      "label": "Thing",
      "link": "#thing",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"d:r:setupComplete\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"o:name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"o:settings\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:settings\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:o:parentId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:o:setupDisplayMessage\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:params\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:params\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"r:setupError\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:setup-error\\\">$ref:ThingError</a></span>,\n  <span class=\"hljs-attr\">\"r:setupStatus\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:setup-status\\\">$ref:ThingSetupStatus</a></span>,\n  <span class=\"hljs-attr\">\"r:states\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:states\\\">$ref:States</a></span>,\n  <span class=\"hljs-attr\">\"r:thingClassId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#o:settings\">ParamList</a>",
          "link": "#<a href=\"#o:settings\">-param-list</a>"
        },
        {
          "label": "<a href=\"#r:params\">ParamList</a>",
          "link": "#<a href=\"#r:params\">-param-list</a>"
        },
        {
          "label": "<a href=\"#r:setup-error\">ThingError</a>",
          "link": "#<a href=\"#r:setup-error\">-thing-error</a>"
        },
        {
          "label": "<a href=\"#r:setup-status\">ThingSetupStatus</a>",
          "link": "#<a href=\"#r:setup-status\">-thing-setup-status</a>"
        },
        {
          "label": "<a href=\"#r:states\">States</a>",
          "link": "#<a href=\"#r:states\">-states</a>"
        }
      ],
      "deprecations": "r:setupComplete"
    },
    {
      "id": "thing-class",
      "label": "ThingClass",
      "link": "#thing-class",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:actionTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:action-types\\\">$ref:ActionTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:browsable\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"r:browserItemActionTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:browser-item-action-types\\\">$ref:ActionTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:createMethods\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:create-methods\\\">$ref:CreateMethods</a></span>,\n  <span class=\"hljs-attr\">\"r:discoveryParamTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:discovery-param-types\\\">$ref:ParamTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:eventTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:event-types\\\">$ref:EventTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:interfaces\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n  <span class=\"hljs-attr\">\"r:name\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:paramTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:param-types\\\">$ref:ParamTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:pluginId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:settingsTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:settings-types\\\">$ref:ParamTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:setupMethod\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:setup-method\\\">$ref:SetupMethod</a></span>,\n  <span class=\"hljs-attr\">\"r:stateTypes\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:state-types\\\">$ref:StateTypes</a></span>,\n  <span class=\"hljs-attr\">\"r:vendorId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#r:action-types\">ActionTypes</a>",
          "link": "#<a href=\"#r:action-types\">-action-types</a>"
        },
        {
          "label": "<a href=\"#r:browser-item-action-types\">ActionTypes</a>",
          "link": "#<a href=\"#r:browser-item-action-types\">-action-types</a>"
        },
        {
          "label": "<a href=\"#r:create-methods\">CreateMethods</a>",
          "link": "#<a href=\"#r:create-methods\">-create-methods</a>"
        },
        {
          "label": "<a href=\"#r:discovery-param-types\">ParamTypes</a>",
          "link": "#<a href=\"#r:discovery-param-types\">-param-types</a>"
        },
        {
          "label": "<a href=\"#r:event-types\">EventTypes</a>",
          "link": "#<a href=\"#r:event-types\">-event-types</a>"
        },
        {
          "label": "<a href=\"#r:param-types\">ParamTypes</a>",
          "link": "#<a href=\"#r:param-types\">-param-types</a>"
        },
        {
          "label": "<a href=\"#r:settings-types\">ParamTypes</a>",
          "link": "#<a href=\"#r:settings-types\">-param-types</a>"
        },
        {
          "label": "<a href=\"#r:setup-method\">SetupMethod</a>",
          "link": "#<a href=\"#r:setup-method\">-setup-method</a>"
        },
        {
          "label": "<a href=\"#r:state-types\">StateTypes</a>",
          "link": "#<a href=\"#r:state-types\">-state-types</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "thing-classes",
      "label": "ThingClasses",
      "link": "#thing-classes",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:ThingClass\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "ThingClass",
          "link": "#thing-class"
        }
      ],
      "deprecations": []
    },
    {
      "id": "thing-descriptor",
      "label": "ThingDescriptor",
      "link": "#thing-descriptor",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:description\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:deviceParams\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:device-params\\\">$ref:ParamList</a></span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:o:thingId\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:title\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#r:device-params\">ParamList</a>",
          "link": "#<a href=\"#r:device-params\">-param-list</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "thing-descriptors",
      "label": "ThingDescriptors",
      "link": "#thing-descriptors",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:ThingDescriptor\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "ThingDescriptor",
          "link": "#thing-descriptor"
        }
      ],
      "deprecations": []
    },
    {
      "id": "things",
      "label": "Things",
      "link": "#things",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:Thing\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "Thing",
          "link": "#thing"
        }
      ],
      "deprecations": []
    },
    {
      "id": "time-descriptor",
      "label": "TimeDescriptor",
      "link": "#time-descriptor",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"o:calendarItems\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:calendar-items\\\">$ref:CalendarItems</a></span>,\n  <span class=\"hljs-attr\">\"o:timeEventItems\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:time-event-items\\\">$ref:TimeEventItems</a></span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#o:calendar-items\">CalendarItems</a>",
          "link": "#<a href=\"#o:calendar-items\">-calendar-items</a>"
        },
        {
          "label": "<a href=\"#o:time-event-items\">TimeEventItems</a>",
          "link": "#<a href=\"#o:time-event-items\">-time-event-items</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "time-event-item",
      "label": "TimeEventItem",
      "link": "#time-event-item",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"o:datetime\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n  <span class=\"hljs-attr\">\"o:repeating\"</span>: <span class=\"hljs-string\"><a href=\\\"#o:repeating\\\">$ref:RepeatingOption</a></span>,\n  <span class=\"hljs-attr\">\"o:time\"</span>: <span class=\"hljs-string\">\"Time\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#o:repeating\">RepeatingOption</a>",
          "link": "#<a href=\"#o:repeating\">-repeating-option</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "time-event-items",
      "label": "TimeEventItems",
      "link": "#time-event-items",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:TimeEventItem\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "TimeEventItem",
          "link": "#time-event-item"
        }
      ],
      "deprecations": []
    },
    {
      "id": "token-info",
      "label": "TokenInfo",
      "link": "#token-info",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:creationTime\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n  <span class=\"hljs-attr\">\"r:deviceName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"r:username\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "token-info-list",
      "label": "TokenInfoList",
      "link": "#token-info-list",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:TokenInfo\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "TokenInfo",
          "link": "#token-info"
        }
      ],
      "deprecations": []
    },
    {
      "id": "user-info",
      "label": "UserInfo",
      "link": "#user-info",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:username\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "vendor",
      "label": "Vendor",
      "link": "#vendor",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"displayName\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"Uuid\"</span>,\n  <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "vendors",
      "label": "Vendors",
      "link": "#vendors",
      "code": "[\n  <span class=\"hljs-string\">\"$ref:Vendor\"</span>\n]",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "Vendor",
          "link": "#vendor"
        }
      ],
      "deprecations": []
    },
    {
      "id": "web-server-configuration",
      "label": "WebServerConfiguration",
      "link": "#web-server-configuration",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"address\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"authenticationEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"id\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"port\"</span>: <span class=\"hljs-string\">\"Uint\"</span>,\n  <span class=\"hljs-attr\">\"publicFolder\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"sslEnabled\"</span>: <span class=\"hljs-string\">\"Bool\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "wired-network-device",
      "label": "WiredNetworkDevice",
      "link": "#wired-network-device",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:bitRate\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:interface\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:ipv4Addresses\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n  <span class=\"hljs-attr\">\"r:ipv6Addresses\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n  <span class=\"hljs-attr\">\"r:macAddress\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:pluggedIn\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"r:state\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:state\\\">$ref:NetworkDeviceState</a></span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#r:state\">NetworkDeviceState</a>",
          "link": "#<a href=\"#r:state\">-network-device-state</a>"
        }
      ],
      "deprecations": ""
    },
    {
      "id": "wireless-access-point",
      "label": "WirelessAccessPoint",
      "link": "#wireless-access-point",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:frequency\"</span>: <span class=\"hljs-string\">\"Double\"</span>,\n  <span class=\"hljs-attr\">\"r:macAddress\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:protected\"</span>: <span class=\"hljs-string\">\"Bool\"</span>,\n  <span class=\"hljs-attr\">\"r:signalStrength\"</span>: <span class=\"hljs-string\">\"Int\"</span>,\n  <span class=\"hljs-attr\">\"r:ssid\"</span>: <span class=\"hljs-string\">\"String\"</span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [],
      "deprecations": ""
    },
    {
      "id": "wireless-network-device",
      "label": "WirelessNetworkDevice",
      "link": "#wireless-network-device",
      "code": "&#123;\n  <span class=\"hljs-attr\">\"r:bitRate\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:interface\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:ipv4Addresses\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n  <span class=\"hljs-attr\">\"r:ipv6Addresses\"</span>: <span class=\"hljs-string\">\"StringList\"</span>,\n  <span class=\"hljs-attr\">\"r:macAddress\"</span>: <span class=\"hljs-string\">\"String\"</span>,\n  <span class=\"hljs-attr\">\"r:mode\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:mode\\\">$ref:WirelessMode</a></span>,\n  <span class=\"hljs-attr\">\"r:o:currentAccessPoint\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:o:current-access-point\\\">$ref:WirelessAccessPoint</a></span>,\n  <span class=\"hljs-attr\">\"r:state\"</span>: <span class=\"hljs-string\"><a href=\\\"#r:state\\\">$ref:NetworkDeviceState</a></span>\n&#125;",
      "description": "",
      "deprecated": "",
      "params": "",
      "returns": "",
      "references": [
        {
          "label": "<a href=\"#r:mode\">WirelessMode</a>",
          "link": "#<a href=\"#r:mode\">-wireless-mode</a>"
        },
        {
          "label": "<a href=\"#r:o:current-access-point\">WirelessAccessPoint</a>",
          "link": "#<a href=\"#r:o:current-access-point\">-wireless-access-point</a>"
        },
        {
          "label": "<a href=\"#r:state\">NetworkDeviceState</a>",
          "link": "#<a href=\"#r:state\">-network-device-state</a>"
        }
      ],
      "deprecations": ""
    }
  ],
  "version": "5.2"
}