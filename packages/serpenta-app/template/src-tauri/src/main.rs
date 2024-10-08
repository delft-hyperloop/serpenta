// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rand::{Rng, thread_rng};
use tauri::WindowEvent;

#[derive(Debug, Clone, Copy, PartialEq, Eq, serde::Serialize, serde::Deserialize, PartialOrd, Ord)]
pub enum Datatype {
    Datatype1,
    Datatype2,
    Datatype3,
    Datatype4,
    Datatype5,
    Datatype6,
    Datatype7,
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
pub struct Datapoint {
    pub datatype: Datatype,
    pub value: u64,
    pub timestamp: u64,
}

#[tauri::command]
fn generate_test_data() -> Vec<Datapoint> {
    let mut rng = thread_rng();
    let mut datapoints = Vec::new();

    let value: u64 = rng.gen_range(0..101);
    let value2: u64 = rng.gen_range(0..101);
    let value3: u64 = rng.gen_range(0..101);
    let value4: u64 = rng.gen_range(0..300);

    let datapoint = Datapoint { value, datatype: Datatype::Datatype3, timestamp: 0 };
    let datapoint2 = Datapoint { value: value2, datatype: Datatype::Datatype4, timestamp: 0 };
    let datapoint3 = Datapoint { value: 1, datatype: Datatype::Datatype5, timestamp: 0 };
    let datapoint4 = Datapoint { value: 2, datatype: Datatype::Datatype6, timestamp: 0 };
    let datapoint5 = Datapoint { value: 3, datatype: Datatype::Datatype7, timestamp: 0 };
    let datapoint6 =
        Datapoint { value: value3, datatype: Datatype::Datatype1, timestamp: 0 };
    let datapoint7 =
        Datapoint { value: value4, datatype: Datatype::Datatype2, timestamp: 0 };

    datapoints.push(datapoint);
    datapoints.push(datapoint2);
    datapoints.push(datapoint3);
    datapoints.push(datapoint4);
    datapoints.push(datapoint5);
    datapoints.push(datapoint6);
    datapoints.push(datapoint7);

    datapoints
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![generate_test_data])
        .run(tauri::generate_context!())
        .setup(move |app| {
            let app_handle = app.handle();
            let window = app_handle.get_window("main").unwrap();

            let s = app_handle.clone();
            let shortcuts = app_handle.global_shortcut_manager();

            window.on_window_event(move |event| {
                let mut sh = shortcuts.clone();
                match event {
                    WindowEvent::Focused(true) => {
                        // Register shortcuts when window is focused
                        let ss = s.clone();
                        sh.register("Space", move || {
                            /*
                            @todo SEND A COMMAND FOR EMERGENCY BRAKE TO POD
                            send_command("EmergencyBrake".into(), 0);
                             */
                            ss.emit_all("status_channel", "Emergency Brake triggered!;red").unwrap();
                            ss.emit_all("error_channel", "Emergency Brake triggered!").unwrap()
                        })
                            .expect("Could not register shortcut");

                        let ss = s.clone();
                        sh.register("Esc", move || {
                            /*
                            @todo SEND A COMMAND FOR EMERGENCY BRAKE TO POD
                            send_command("EmergencyBrake".into(), 0);
                             */
                            ss.emit_all("error_channel", "Emergency Brake triggered!").unwrap();
                            ss.emit_all("status_channel", "Emergency Brake triggered!;red").unwrap();
                        })
                            .expect("Could not register shortcut");
                    }
                    WindowEvent::Focused(false) => {
                        // Unregister shortcuts when window loses focus
                        sh.unregister("Esc").expect("Could not unregister shortcut");
                        sh.unregister("Space").expect("Could not unregister shortcut");
                    }
                    _ => {}
                }
            });
        })
        .expect("error while running tauri application");
}
