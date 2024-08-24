# Environment Variables

The Serpenta GUI makes use of several environment variables for its configuration. These define the behaviour of the
application allowing for easier non-business logic related configuration.

| Environment variable name      | Values (default) | Comment                                                                                                                                                      |
| ------------------------------ | ---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GUI_CUSTOM_APP_BAR`           | `TRUE`           | Determines whether the top bar of the app is the custom one provided by Serpenta. Off will default the bar to use the native bar of the desktop environment. |
| `GUI_AGGREGATOR_COMMAND`       | string           | Determines the name of the function will be called by the Grand Data Distributor when aggregating the data which it will subsequently redistribute.          |
| `GUI_COMMS_ALERT_CHANNEL_NAME` | string           |                                                                                                                                                              |
| `GUI_COMMS_LOG_CHANNEL_NAME`   | string           |                                                                                                                                                              |
| `GUI_STORES_FSM_NAME`          | `FSMState`       | Specify the name of the store that will be considered to store the FSMState                                                                                  |
