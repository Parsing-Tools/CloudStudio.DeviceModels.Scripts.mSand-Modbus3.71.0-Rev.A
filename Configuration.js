function getConfiguration(config) {

    config.addressLabel = { en: "Serial Number", es: "Número de Serie" };
}

function getEndpoints(deviceAddress, endpoints) {
    var alarms = endpoints.addEndpoint("ALARMS", { en: "There are alarms", es: "Hay Alarmas" }, endpointType.genericSensor);
    alarms.variableTypeId = 1630;
    var a_h_hipt3_ss1 = endpoints.addEndpoint("A_H_HIPT3_SS1", { en: "High high SS1 PT3", es: "Alto alto de SS1 PT3" }, endpointType.genericSensor);
    a_h_hipt3_ss1.variableTypeId = 1641;
    var a_h_hipt3_ss2 = endpoints.addEndpoint("A_H_HIPT3_SS2", { en: "High high SS2 PT3", es: "Alto alto de SS2 PT3" }, endpointType.genericSensor);
    a_h_hipt3_ss2.variableTypeId = 1641;
    var a_h_hipt3_ss3 = endpoints.addEndpoint("A_H_HIPT3_SS3", { en: "High high SS3 PT3", es: "Alto alto de SS3 PT3" }, endpointType.genericSensor);
    a_h_hipt3_ss3.variableTypeId = 1641;
    var a_h_hipt3_ss4 = endpoints.addEndpoint("A_H_HIPT3_SS4", { en: "High high SS4 PT3", es: "Alto alto de SS4 PT3" }, endpointType.genericSensor);
    a_h_hipt3_ss4.variableTypeId = 1641;
    var a_valve_1_fail = endpoints.addEndpoint("A_VALVE_1_FAIL", { en: "PV1 operation failure", es: "Falla de operación de PV1" }, endpointType.genericSensor);
    a_valve_1_fail.variableTypeId = 1641;
    var a_valve_2_fail = endpoints.addEndpoint("A_VALVE_2_FAIL", { en: "PV2 operation failure", es: "Falla de operación de PV2" }, endpointType.genericSensor);
    a_valve_2_fail.variableTypeId = 1641;
    var a_valve_3_fail = endpoints.addEndpoint("A_VALVE_3_FAIL", { en: "CV3 operation failure", es: "Falla de operación de CV3" }, endpointType.genericSensor);
    a_valve_3_fail.variableTypeId = 1641;
    var a_valve_1_ss1 = endpoints.addEndpoint("A_VALVE_1_SS1", { en: "SS1 PV1´ operation failure", es: "Falla de operación de SS1 PV1´" }, endpointType.genericSensor);
    a_valve_1_ss1.variableTypeId = 1641;
    var a_valve_1_ss2 = endpoints.addEndpoint("A_VALVE_1_SS2", { en: "SS2 PV1´ operation failure", es: "Falla de operación de SS2 PV1´" }, endpointType.genericSensor);
    a_valve_1_ss2.variableTypeId = 1641;
    var a_valve_1_ss3 = endpoints.addEndpoint("A_VALVE_1_SS3", { en: "SS3 PV1´ operation failure", es: "Falla de operación de SS3 PV1´" }, endpointType.genericSensor);
    a_valve_1_ss3.variableTypeId = 1641;
    var a_valve_1_ss4 = endpoints.addEndpoint("A_VALVE_1_SS4", { en: "SS4 PV1´ operation failure", es: "Falla de operación de SS4 PV1´" }, endpointType.genericSensor);
    a_valve_1_ss4.variableTypeId = 1641;
    var a_pt3_disconnected_ss1 = endpoints.addEndpoint("A_PT3_DISCONNECTED_SS1", { en: "SS1 PT3 sensor disconnected", es: "Sensor desconectado de SS1 PT3" }, endpointType.genericSensor);
    a_pt3_disconnected_ss1.variableTypeId = 1635;
    var a_pt3_disconnected_ss2 = endpoints.addEndpoint("A_PT3_DISCONNECTED_SS2", { en: "SS2 PT3 sensor disconnected", es: "Sensor desconectado de SS2 PT3" }, endpointType.genericSensor);
    a_pt3_disconnected_ss2.variableTypeId = 1635;
    var a_pt3_disconnected_ss3 = endpoints.addEndpoint("A_PT3_DISCONNECTED_SS3", { en: "SS3 PT3 sensor disconnected", es: "Sensor desconectado de SS3 PT3" }, endpointType.genericSensor);
    a_pt3_disconnected_ss3.variableTypeId = 1635;
    var a_pt3_disconnected_ss4 = endpoints.addEndpoint("A_PT3_DISCONNECTED_SS4", { en: "SS4 PT3 sensor disconnected", es: "Sensor desconectado de SS4 PT3" }, endpointType.genericSensor);
    a_pt3_disconnected_ss4.variableTypeId = 1635;
    var a_pt2_disconnected_ss1 = endpoints.addEndpoint("A_PT2_DISCONNECTED_SS1", { en: "SS1 PT2 sensor disconnected", es: "Sensor desconectado de SS1 PT2" }, endpointType.genericSensor);
    a_pt2_disconnected_ss1.variableTypeId = 1635;
    var a_pt2_disconnected_ss2 = endpoints.addEndpoint("A_PT2_DISCONNECTED_SS2", { en: "SS2 PT2 sensor disconnected", es: "Sensor desconectado de SS2 PT2" }, endpointType.genericSensor);
    a_pt2_disconnected_ss2.variableTypeId = 1635;
    var a_pt2_disconnected_ss3 = endpoints.addEndpoint("A_PT2_DISCONNECTED_SS3", { en: "SS3 PT2 sensor disconnected", es: "Sensor desconectado de SS3 PT2" }, endpointType.genericSensor);
    a_pt2_disconnected_ss3.variableTypeId = 1635;
    var a_pt2_disconnected_ss4 = endpoints.addEndpoint("A_PT2_DISCONNECTED_SS4", { en: "SS4 PT2 sensor disconnected", es: "Sensor desconectado de SS4 PT2" }, endpointType.genericSensor);
    a_pt2_disconnected_ss4.variableTypeId = 1635;
    var a_pt1_disconnected = endpoints.addEndpoint("A_PT1_DISCONNECTED", { en: "PT1 sensor disconnected", es: "Sensor desconectado de PT1" }, endpointType.genericSensor);
    a_pt1_disconnected.variableTypeId = 1635;
    var a_h_hipt3_ss5 = endpoints.addEndpoint("A_H_HIPT3_SS5", { en: "High high SS5 PT3", es: "Alto alto SS5 PT3" }, endpointType.genericSensor);
    a_h_hipt3_ss5.variableTypeId = 1641;
    var a_h_hipt3_ss6 = endpoints.addEndpoint("A_H_HIPT3_SS6", { en: "High high SS6 PT3", es: "Alto alto SS6 PT3" }, endpointType.genericSensor);
    a_h_hipt3_ss6.variableTypeId = 1641;
    var a_h_hipt3_ss7 = endpoints.addEndpoint("A_H_HIPT3_SS7", { en: "High high SS7 PT3", es: "Alto alto SS7 PT3" }, endpointType.genericSensor);
    a_h_hipt3_ss7.variableTypeId = 1641;
    var a_h_hipt3_ss8 = endpoints.addEndpoint("A_H_HIPT3_SS8", { en: "High high SS8 PT3", es: "Alto alto SS8 PT3" }, endpointType.genericSensor);
    a_h_hipt3_ss8.variableTypeId = 1641;
    var a_wgt1_disconnected_mw8 = endpoints.addEndpoint("A_WGT1_DISCONNECTED_MW8", { en: "mW8 WG1 sensor disconnected", es: "Sensor desconectado de mW8 WG1" }, endpointType.genericSensor);
    a_wgt1_disconnected_mw8.variableTypeId = 1635;
    var a_ap_disconnected_mms2 = endpoints.addEndpoint("A_AP_DISCONNECTED_MMS2", { en: "MMS2 AP sensor disconnected", es: "Sensor desconectado de MMS2 AP" }, endpointType.genericSensor);
    a_ap_disconnected_mms2.variableTypeId = 1635;
    var a_bc_low_voltage_mms2 = endpoints.addEndpoint("A_BC_LOW_VOLTAGE_MMS2", { en: "MMS2 CB battery low voltage", es: "Voltaje bajo de batería de MMS2 CB" }, endpointType.genericSensor);
    a_bc_low_voltage_mms2.variableTypeId = 1641;
    var a_pb_low_voltage_mms2 = endpoints.addEndpoint("A_PB_LOW_VOLTAGE_MMS2", { en: "MMS2 PB battery low voltage", es: "Voltaje bajo de batería de MMS2 PB" }, endpointType.genericSensor);
    a_pb_low_voltage_mms2.variableTypeId = 1641;
    var a_ap_disconnected = endpoints.addEndpoint("A_AP_DISCONNECTED", { en: "mSand AP sensor disconnected", es: "Sensor desconectado de mSand AP" }, endpointType.genericSensor);
    a_ap_disconnected.variableTypeId = 1635;
    var a_ap_disconnected_mms = endpoints.addEndpoint("A_AP_DISCONNECTED_MMS", { en: "MMS AP sensor disconnected", es: "Sensor desconectado de MMS AP" }, endpointType.genericSensor);
    a_ap_disconnected_mms.variableTypeId = 1635;
    var a_ap_disconnected_mw8 = endpoints.addEndpoint("A_AP_DISCONNECTED_MW8", { en: "mW8 AP sensor disconnected", es: "Sensor desconectado de mW8 AP" }, endpointType.genericSensor);
    a_ap_disconnected_mw8.variableTypeId = 1635;
    var a_hydraulic_system_fail = endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL", { en: "mSand Hydraulic System Failure", es: "Falla del sistema hidraulico de mSand" }, endpointType.genericSensor);
    a_hydraulic_system_fail.variableTypeId = 1641;
    var a_hydraulic_system_fail_mms = endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL_MMS", { en: "MMS Hydraulic System Failure", es: "Falla del sistema hidraulico de MMS" }, endpointType.genericSensor);
    a_hydraulic_system_fail_mms.variableTypeId = 1641;
    var a_hydraulic_system_fail_mw8 = endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL_MW8", { en: "mW8 Hydraulic System Failure", es: "Falla del sistema hidraulico de mW8" }, endpointType.genericSensor);
    a_hydraulic_system_fail_mw8.variableTypeId = 1641;
    var a_bc_low_voltage = endpoints.addEndpoint("A_BC_LOW_VOLTAGE", { en: "mSand CB battery low voltage", es: "Voltaje bajo de batería de mSand CB" }, endpointType.genericSensor);
    a_bc_low_voltage.variableTypeId = 1641;
    var a_bc_low_voltage_mms = endpoints.addEndpoint("A_BC_LOW_VOLTAGE_MMS", { en: "MMS CB battery low voltage", es: "Voltaje bajo de batería de MMS CB" }, endpointType.genericSensor);
    a_bc_low_voltage_mms.variableTypeId = 1641;
    var a_bc_low_voltage_mw8 = endpoints.addEndpoint("A_BC_LOW_VOLTAGE_MW8", { en: "mW8 CB battery low voltage", es: "Voltaje bajo de batería de mW8 CB" }, endpointType.genericSensor);
    a_bc_low_voltage_mw8.variableTypeId = 1641;
    var a_pb_low_voltage = endpoints.addEndpoint("A_PB_LOW_VOLTAGE", { en: "mSand PB battery low voltage", es: "Voltaje bajo de batería de mSand PB" }, endpointType.genericSensor);
    a_pb_low_voltage.variableTypeId = 1641;
    var a_pb_low_voltage_mms = endpoints.addEndpoint("A_PB_LOW_VOLTAGE_MMS", { en: "MMS PB battery low voltage", es: "Voltaje bajo de batería de MMS PB" }, endpointType.genericSensor);
    a_pb_low_voltage_mms.variableTypeId = 1641;
    var a_pb_low_voltage_mw8 = endpoints.addEndpoint("A_PB_LOW_VOLTAGE_MW8", { en: "mW8 PB battery low voltage", es: "Voltaje bajo de batería de mW8 PB" }, endpointType.genericSensor);
    a_pb_low_voltage_mw8.variableTypeId = 1641;
    var a_valve_1_seat_test_fail = endpoints.addEndpoint("A_VALVE_1_SEAT_TEST_FAIL", { en: "Test - PV1 seat test unsuccessful", es: "Prueba de asentamiento de PV1 fallida" }, endpointType.genericSensor);
    a_valve_1_seat_test_fail.variableTypeId = 1641;
    var a_valve_2_seat_test_fail = endpoints.addEndpoint("A_VALVE_2_SEAT_TEST_FAIL", { en: "Test - PV2 seat test unsuccessful", es: "Prueba de asentamiento de PV2 fallida" }, endpointType.genericSensor);
    a_valve_2_seat_test_fail.variableTypeId = 1641;
    var a_vent_fail = endpoints.addEndpoint("A_VENT_FAIL", { en: "Test - Vent Fail", es: "Falla de prueba de ventilación" }, endpointType.genericSensor);
    a_vent_fail.variableTypeId = 1641;
    var ack_dump_ss1 = endpoints.addEndpoint("ACK_DUMP_SS1", { en: "Dump SS1 Command Acknowledgement", es: "Confirmación de comando de volcado de SS1" }, endpointType.genericSensor);
    ack_dump_ss1.variableTypeId = 1641;
    var ack_dump_ss2 = endpoints.addEndpoint("ACK_DUMP_SS2", { en: "Dump SS2 Command Acknowledgement", es: "Confirmación de comando de volcado de SS2" }, endpointType.genericSensor);
    ack_dump_ss2.variableTypeId = 1641;
    var ack_dump_ss3 = endpoints.addEndpoint("ACK_DUMP_SS3", { en: "Dump SS3 Command Acknowledgement", es: "Confirmación de comando de volcado de SS3" }, endpointType.genericSensor);
    ack_dump_ss3.variableTypeId = 1641;
    var ack_dump_ss4 = endpoints.addEndpoint("ACK_DUMP_SS4", { en: "Dump SS4 Command Acknowledgement", es: "Confirmación de comando de volcado de SS4" }, endpointType.genericSensor);
    ack_dump_ss4.variableTypeId = 1641;
    var ack_test = endpoints.addEndpoint("ACK_TEST", { en: "Test Command Acknowledgement", es: "Confirmación de comando de prueba" }, endpointType.genericSensor);
    ack_test.variableTypeId = 1641;
    var ack_stop = endpoints.addEndpoint("ACK_STOP", { en: "Stop Command Acknowledgement", es: "Confirmación de comando de parada" }, endpointType.genericSensor);
    ack_stop.variableTypeId = 1641;
    var ack_rst_err = endpoints.addEndpoint("ACK_RST_ERR", { en: "Reset Command Acknowledgement", es: "Confirmación de comando de reinicio" }, endpointType.genericSensor);
    ack_rst_err.variableTypeId = 1641;
    var ack_rst_a = endpoints.addEndpoint("ACK_RST_A", { en: "Clear Alarms Command Acknowledgement", es: "Confirmación de comando de borrar alarmas" }, endpointType.genericSensor);
    ack_rst_a.variableTypeId = 1641;
    var a_line_voltage = endpoints.addEndpoint("A_LINE_VOLTAGE", { en: "mSand - Line Voltage", es: "Voltaje de línea de mSand" }, endpointType.genericSensor);
    a_line_voltage.variableTypeId = 1640;
    var a_line_voltage_mms = endpoints.addEndpoint("A_LINE_VOLTAGE_MMS", { en: "MMS - Line Voltage", es: "Voltaje de línea de MMS" }, endpointType.genericSensor);
    a_line_voltage_mms.variableTypeId = 1640;
    var a_full_tank = endpoints.addEndpoint("A_FULL_TANK", { en: "Full tank", es: "Tanque lleno" }, endpointType.genericSensor);
    a_full_tank.variableTypeId = 1646;
    var s_tbd_ss1 = endpoints.addEndpoint("S_TBD_SS1", { en: "SS1 - Time Between Dumps", es: "Tiempo entre vaciados de SS1" }, endpointType.genericSensor);
    s_tbd_ss1.variableTypeId = 1637;
    s_tbd_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_tbd_ss1.operationWarningMessage = { "en": "You are about to change the value of SS1 - Time Between Dumps", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS1" };
    s_tbd_ss1.accessType = endpointAccessType.readWriteCommand;
    var s_tbd_ss2 = endpoints.addEndpoint("S_TBD_SS2", { en: "SS2 - Time Between Dumps", es: "Tiempo entre vaciados de SS2" }, endpointType.genericSensor);
    s_tbd_ss2.variableTypeId = 1637;
    s_tbd_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_tbd_ss2.operationWarningMessage = { "en": "You are about to change the value of SS2 - Time Between Dumps", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS2" };
    s_tbd_ss2.accessType = endpointAccessType.readWriteCommand;
    var s_tbd_ss3 = endpoints.addEndpoint("S_TBD_SS3", { en: "SS3 - Time Between Dumps", es: "Tiempo entre vaciados de SS3" }, endpointType.genericSensor);
    s_tbd_ss3.variableTypeId = 1637;
    s_tbd_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_tbd_ss3.operationWarningMessage = { "en": "You are about to change the value of SS3 - Time Between Dumps", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS3" };
    s_tbd_ss3.accessType = endpointAccessType.readWriteCommand;
    var s_tbd_ss4 = endpoints.addEndpoint("S_TBD_SS4", { en: "SS4 - Time Between Dumps", es: "Tiempo entre vaciados de SS4" }, endpointType.genericSensor);
    s_tbd_ss4.variableTypeId = 1637;
    s_tbd_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_tbd_ss4.operationWarningMessage = { "en": "You are about to change the value of SS4 - Time Between Dumps", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS4" };
    s_tbd_ss4.accessType = endpointAccessType.readWriteCommand;
    var s_dpt3pt2_ss1 = endpoints.addEndpoint("S_DPT3PT2_SS1", { en: "SS1 - Differential PT3-PT2", es: "SS1 - Diferencial PT3-PT2" }, endpointType.genericSensor);
    s_dpt3pt2_ss1.variableTypeId = 1637;
    s_dpt3pt2_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_dpt3pt2_ss1.operationWarningMessage = { "en": "Security check!", "es": "Validación de seguridad!" };
    s_dpt3pt2_ss1.accessType = endpointAccessType.readWriteCommand;
    var s_dpt3pt2_ss2 = endpoints.addEndpoint("S_DPT3PT2_SS2", { en: "SS2 - Differential PT3-PT2", es: "SS2 - Diferencial PT3-PT2" }, endpointType.genericSensor);
    s_dpt3pt2_ss2.variableTypeId = 1637;
    s_dpt3pt2_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_dpt3pt2_ss2.operationWarningMessage = { "en": "Security check!", "es": "Validación de seguridad!" };
    s_dpt3pt2_ss2.accessType = endpointAccessType.readWriteCommand;
    var s_dpt3pt2_ss3 = endpoints.addEndpoint("S_DPT3PT2_SS3", { en: "SS3 - Differential PT3-PT2", es: "SS3 - Diferencial PT3-PT2" }, endpointType.genericSensor);
    s_dpt3pt2_ss3.variableTypeId = 1637;
    s_dpt3pt2_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_dpt3pt2_ss3.operationWarningMessage = { "en": "Security check!", "es": "Validación de seguridad!" };
    s_dpt3pt2_ss3.accessType = endpointAccessType.readWriteCommand;
    var s_dpt3pt2_ss4 = endpoints.addEndpoint("S_DPT3PT2_SS4", { en: "SS4 - Differential PT3-PT2", es: "SS4 - Diferencial PT3-PT2" }, endpointType.genericSensor);
    s_dpt3pt2_ss4.variableTypeId = 1637;
    s_dpt3pt2_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_dpt3pt2_ss4.operationWarningMessage = { "en": "Security check!", "es": "Validación de seguridad!" };
    s_dpt3pt2_ss4.accessType = endpointAccessType.readWriteCommand;
    var s_hipt3_ss1 = endpoints.addEndpoint("S_HIPT3_SS1", { en: "SS1 - High PT3", es: "SS1 - PT3 Alto" }, endpointType.genericSensor);
    s_hipt3_ss1.variableTypeId = 1637;
    s_hipt3_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_hipt3_ss1.operationWarningMessage = { "en": "You are about to change the value of SS1 - High PT3", "es": "Está por cambiar el valor de SS1 - PT3 Alto" };
    s_hipt3_ss1.accessType = endpointAccessType.readWriteCommand;
    var s_hipt3_ss2 = endpoints.addEndpoint("S_HIPT3_SS2", { en: "SS2 - High PT3", es: "SS2 - PT3 Alto" }, endpointType.genericSensor);
    s_hipt3_ss2.variableTypeId = 1637;
    s_hipt3_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_hipt3_ss2.operationWarningMessage = { "en": "You are about to change the value of SS2 - High PT3", "es": "Está por cambiar el valor de SS2 - PT3 Alto" };
    s_hipt3_ss2.accessType = endpointAccessType.readWriteCommand;
    var s_hipt3_ss3 = endpoints.addEndpoint("S_HIPT3_SS3", { en: "SS3 - High PT3", es: "SS3 - PT3 Alto" }, endpointType.genericSensor);
    s_hipt3_ss3.variableTypeId = 1637;
    s_hipt3_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_hipt3_ss3.operationWarningMessage = { "en": "You are about to change the value of SS3 - High PT3", "es": "Está por cambiar el valor de SS3 - PT3 Alto" };
    s_hipt3_ss3.accessType = endpointAccessType.readWriteCommand;
    var s_hipt3_ss4 = endpoints.addEndpoint("S_HIPT3_SS4", { en: "SS4 - High PT3", es: "SS4 - PT3 Alto" }, endpointType.genericSensor);
    s_hipt3_ss4.variableTypeId = 1637;
    s_hipt3_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_hipt3_ss4.operationWarningMessage = { "en": "You are about to change the value of SS4 - High PT3", "es": "Está por cambiar el valor de SS4 - PT3 Alto" };
    s_hipt3_ss4.accessType = endpointAccessType.readWriteCommand;
    var s_tbd_ss5 = endpoints.addEndpoint("S_TBD_SS5", { en: "SS5 - Time Between Dumps", es: "Tiempo entre vaciados de SS5" }, endpointType.genericSensor);
    s_tbd_ss5.variableTypeId = 1637;
    s_tbd_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_tbd_ss5.operationWarningMessage = { "en": "You are about to change the value of SS5 - Time Between Dumps", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS5" };
    s_tbd_ss5.accessType = endpointAccessType.readWriteCommand;
    var s_tbd_ss6 = endpoints.addEndpoint("S_TBD_SS6", { en: "SS6 - Time Between Dumps", es: "Tiempo entre vaciados de SS6" }, endpointType.genericSensor);
    s_tbd_ss6.variableTypeId = 1637;
    s_tbd_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_tbd_ss6.operationWarningMessage = { "en": "You are about to change the value of SS6 - Time Between Dumps", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS6" };
    s_tbd_ss6.accessType = endpointAccessType.readWriteCommand;
    var s_tbd_ss7 = endpoints.addEndpoint("S_TBD_SS7", { en: "SS7 - Time Between Dumps", es: "Tiempo entre vaciados de SS7" }, endpointType.genericSensor);
    s_tbd_ss7.variableTypeId = 1637;
    s_tbd_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_tbd_ss7.operationWarningMessage = { "en": "You are about to change the value of SS7 - Time Between Dumps", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS7" };
    s_tbd_ss7.accessType = endpointAccessType.readWriteCommand;
    var s_tbd_ss8 = endpoints.addEndpoint("S_TBD_SS8", { en: "SS8 - Time Between Dumps", es: "Tiempo entre vaciados de SS8" }, endpointType.genericSensor);
    s_tbd_ss8.variableTypeId = 1637;
    s_tbd_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_tbd_ss8.operationWarningMessage = { "en": "You are about to change the value of SS8 - Time Between Dumps", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS8" };
    s_tbd_ss8.accessType = endpointAccessType.readWriteCommand;
    var s_pdc_ss1 = endpoints.addEndpoint("S_PDC_SS1", { en: "SS1 - Pressure Drop Closing", es: "SS1 - Cierre por caida de presión" }, endpointType.genericSensor);
    s_pdc_ss1.variableTypeId = 1637;
    s_pdc_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_pdc_ss1.operationWarningMessage = { "en": "You are about to change the value of SS1 - Pressure Drop Closing", "es": "Está por cambiar el valor de SS1 - Cierre por caida de presión" };
    s_pdc_ss1.accessType = endpointAccessType.readWriteCommand;
    var s_pdc_ss2 = endpoints.addEndpoint("S_PDC_SS2", { en: "SS2 - Pressure Drop Closing", es: "SS2 - Cierre por caida de presión" }, endpointType.genericSensor);
    s_pdc_ss2.variableTypeId = 1637;
    s_pdc_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_pdc_ss2.operationWarningMessage = { "en": "You are about to change the value of SS2 - Pressure Drop Closing", "es": "Está por cambiar el valor de SS2 - Cierre por caida de presión" };
    s_pdc_ss2.accessType = endpointAccessType.readWriteCommand;
    var s_pdc_ss3 = endpoints.addEndpoint("S_PDC_SS3", { en: "SS3 - Pressure Drop Closing", es: "SS3 - Cierre por caida de presión" }, endpointType.genericSensor);
    s_pdc_ss3.variableTypeId = 1637;
    s_pdc_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_pdc_ss3.operationWarningMessage = { "en": "You are about to change the value of SS3 - Pressure Drop Closing", "es": "Está por cambiar el valor de SS3 - Cierre por caida de presión" };
    s_pdc_ss3.accessType = endpointAccessType.readWriteCommand;
    var s_pdc_ss4 = endpoints.addEndpoint("S_PDC_SS4", { en: "SS4 - Pressure Drop Closing", es: "SS4 - Cierre por caida de presión" }, endpointType.genericSensor);
    s_pdc_ss4.variableTypeId = 1637;
    s_pdc_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_pdc_ss4.operationWarningMessage = { "en": "You are about to change the value of SS4 - Pressure Drop Closing", "es": "Está por cambiar el valor de SS4 - Cierre por caida de presión" };
    s_pdc_ss4.accessType = endpointAccessType.readWriteCommand;
    var s_auto_seat_test = endpoints.addEndpoint("S_AUTO_SEAT_TEST", { en: "Automatic Test PV1&PV2", es: "Test automático PV1&PV2" }, endpointType.genericSensor);
    s_auto_seat_test.variableTypeId = 1637;
    s_auto_seat_test.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_auto_seat_test.operationWarningMessage = { "en": "You are about to change the value of Automatic Test PV1&PV2", "es": "Está por cambiar el valor de Test automático PV1&PV2" };
    s_auto_seat_test.accessType = endpointAccessType.readWriteCommand;
    var cmd_dump_ss1 = endpoints.addEndpoint("CMD_DUMP_SS1", { en: "Dump SS1 Command", es: "Comando 'vaciado de SS1" }, endpointType.genericSensor);
    cmd_dump_ss1.variableTypeId = 1633;
    cmd_dump_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_dump_ss1.operationWarningMessage = { "en": "You are about to change the value of Dump SS1 Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando 'vaciado de SS1, esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_dump_ss1.accessType = endpointAccessType.readWriteCommand;
    var cmd_dump_ss2 = endpoints.addEndpoint("CMD_DUMP_SS2", { en: "Dump SS2 Command", es: "Comando 'vaciado de SS2" }, endpointType.genericSensor);
    cmd_dump_ss2.variableTypeId = 1633;
    cmd_dump_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_dump_ss2.operationWarningMessage = { "en": "You are about to change the value of Dump SS2 Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando 'vaciado de SS2, esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_dump_ss2.accessType = endpointAccessType.readWriteCommand;
    var cmd_dump_ss3 = endpoints.addEndpoint("CMD_DUMP_SS3", { en: "Dump SS3 Command", es: "Comando 'vaciado de SS3" }, endpointType.genericSensor);
    cmd_dump_ss3.variableTypeId = 1633;
    cmd_dump_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_dump_ss3.operationWarningMessage = { "en": "You are about to change the value of Dump SS3 Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando 'vaciado de SS3, esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_dump_ss3.accessType = endpointAccessType.readWriteCommand;
    var cmd_dump_ss4 = endpoints.addEndpoint("CMD_DUMP_SS4", { en: "Dump SS4 Command", es: "Comando 'vaciado de SS4" }, endpointType.genericSensor);
    cmd_dump_ss4.variableTypeId = 1633;
    cmd_dump_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_dump_ss4.operationWarningMessage = { "en": "You are about to change the value of Dump SS4 Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando 'vaciado de SS4, esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_dump_ss4.accessType = endpointAccessType.readWriteCommand;
    var cmd_test = endpoints.addEndpoint("CMD_TEST", { en: "Test Command", es: "Comando 'test'" }, endpointType.genericSensor);
    cmd_test.variableTypeId = 1633;
    cmd_test.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_test.operationWarningMessage = { "en": "You are about to change the value of Test Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando 'test', esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_test.accessType = endpointAccessType.readWriteCommand;
    var cmd_stop = endpoints.addEndpoint("CMD_STOP", { en: "Stop Command", es: "Comando 'parar'" }, endpointType.genericSensor);
    cmd_stop.variableTypeId = 1633;
    cmd_stop.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_stop.operationWarningMessage = { "en": "You are about to change the value of Stop Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando 'parar', esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_stop.accessType = endpointAccessType.readWriteCommand;
    var cmd_rst_err = endpoints.addEndpoint("CMD_RST_ERR", { en: "Reset Command (Quit Error Mode)", es: "Comando de reinicio (salir de modo error)" }, endpointType.genericSensor);
    cmd_rst_err.variableTypeId = 1633;
    cmd_rst_err.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_rst_err.operationWarningMessage = { "en": "You are about to change the value of Reset Command (Quit Error Mode), this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando de reinicio (salir de modo error), esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_rst_err.accessType = endpointAccessType.readWriteCommand;
    var cmd_rst_dumps = endpoints.addEndpoint("CMD_RST_DUMPS", { en: "Clear Dump Counter Command", es: "Comando 'borrar contador de vaciados'" }, endpointType.genericSensor);
    cmd_rst_dumps.variableTypeId = 1633;
    cmd_rst_dumps.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_rst_dumps.operationWarningMessage = { "en": "You are about to change the value of Clear Dump Counter Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando 'borrar contador de vaciados', esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_rst_dumps.accessType = endpointAccessType.readWriteCommand;
    var cmd_rst_a = endpoints.addEndpoint("CMD_RST_A", { en: "Clear Alarms Command", es: "Comando 'borrar alarmas'" }, endpointType.genericSensor);
    cmd_rst_a.variableTypeId = 1633;
    cmd_rst_a.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_rst_a.operationWarningMessage = { "en": "You are about to change the value of Clear Alarms Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando 'borrar alarmas', esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_rst_a.accessType = endpointAccessType.readWriteCommand;
    var a_valve_1_ss5 = endpoints.addEndpoint("A_VALVE_1_SS5", { en: "SS5 PV1´ operation failure", es: "Fallo de funcionaminto de SS5 PV1" }, endpointType.genericSensor);
    a_valve_1_ss5.variableTypeId = 1641;
    var a_valve_1_ss6 = endpoints.addEndpoint("A_VALVE_1_SS6", { en: "SS6 PV1´ operation failure", es: "Fallo de funcionaminto de SS6 PV1" }, endpointType.genericSensor);
    a_valve_1_ss6.variableTypeId = 1641;
    var a_valve_1_ss7 = endpoints.addEndpoint("A_VALVE_1_SS7", { en: "SS7 PV1´ operation failure", es: "Fallo de funcionaminto de SS7 PV1" }, endpointType.genericSensor);
    a_valve_1_ss7.variableTypeId = 1641;
    var a_valve_1_ss8 = endpoints.addEndpoint("A_VALVE_1_SS8", { en: "SS8 PV1´ operation failure", es: "Fallo de funcionaminto de SS8 PV1" }, endpointType.genericSensor);
    a_valve_1_ss8.variableTypeId = 1641;
    var a_sieve_fail_mw8 = endpoints.addEndpoint("A_SIEVE_FAIL_MW8", { en: "MW8 Sieve operation failure", es: "MW8 Falla en funcionamiento del sieve" }, endpointType.genericSensor);
    a_sieve_fail_mw8.variableTypeId = 1635;
    var a_pt3_disconnected_ss5 = endpoints.addEndpoint("A_PT3_DISCONNECTED_SS5", { en: "SS5 PT3 sensor", es: "Sensor SS5 PT3" }, endpointType.genericSensor);
    a_pt3_disconnected_ss5.variableTypeId = 1635;
    var a_pt3_disconnected_ss6 = endpoints.addEndpoint("A_PT3_DISCONNECTED_SS6", { en: "SS6 PT3 sensor", es: "Sensor SS6 PT3" }, endpointType.genericSensor);
    a_pt3_disconnected_ss6.variableTypeId = 1635;
    var a_pt3_disconnected_ss7 = endpoints.addEndpoint("A_PT3_DISCONNECTED_SS7", { en: "SS7 PT3 sensor", es: "Sensor SS7 PT3" }, endpointType.genericSensor);
    a_pt3_disconnected_ss7.variableTypeId = 1635;
    var a_pt3_disconnected_ss8 = endpoints.addEndpoint("A_PT3_DISCONNECTED_SS8", { en: "SS8 PT3 sensor", es: "Sensor SS58 PT3" }, endpointType.genericSensor);
    a_pt3_disconnected_ss8.variableTypeId = 1635;
    var a_pt2_disconnected_ss5 = endpoints.addEndpoint("A_PT2_DISCONNECTED_SS5", { en: "SS5 PT2 sensor", es: "Sensor SS5 PT2" }, endpointType.genericSensor);
    a_pt2_disconnected_ss5.variableTypeId = 1635;
    var a_pt2_disconnected_ss6 = endpoints.addEndpoint("A_PT2_DISCONNECTED_SS6", { en: "SS6 PT2 sensor", es: "Sensor SS6 PT2" }, endpointType.genericSensor);
    a_pt2_disconnected_ss6.variableTypeId = 1635;
    var a_pt2_disconnected_ss7 = endpoints.addEndpoint("A_PT2_DISCONNECTED_SS7", { en: "SS7 PT2 sensor", es: "Sensor SS7 PT2" }, endpointType.genericSensor);
    a_pt2_disconnected_ss7.variableTypeId = 1635;
    var a_pt2_disconnected_ss8 = endpoints.addEndpoint("A_PT2_DISCONNECTED_SS8", { en: "SS8 PT2 sensor", es: "Sensor SS8 PT2" }, endpointType.genericSensor);
    a_pt2_disconnected_ss8.variableTypeId = 1635;
    var a_p1_disconnected = endpoints.addEndpoint("A_P1_DISCONNECTED", { en: "P1 sensor", es: "Sensor P1" }, endpointType.genericSensor);
    a_p1_disconnected.variableTypeId = 1635;
    var a_hydraulic_system_fail_mms2 = endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL_MMS2", { en: "MMS2 Hydraulic System Failure", es: "MMS2 Falla en sistema hidráulico" }, endpointType.genericSensor);
    a_hydraulic_system_fail_mms2.variableTypeId = 1641;
    var a_valve_x_seat_test_fail = endpoints.addEndpoint("A_VALVE_X_SEAT_TEST_FAIL", { en: "Test - SSx PV1' seat test unsuccessful", es: "Test - SSx PV1' seat test unsuccessful" }, endpointType.genericSensor);
    a_valve_x_seat_test_fail.variableTypeId = 1641;
    var ack_dump_ss5 = endpoints.addEndpoint("ACK_DUMP_SS5", { en: "Dump SS5 Command Acknowledgement", es: "SS5 - Confirmacion de comando de vaciado" }, endpointType.genericSensor);
    ack_dump_ss5.variableTypeId = 1641;
    var ack_dump_ss6 = endpoints.addEndpoint("ACK_DUMP_SS6", { en: "Dump SS6 Command Acknowledgement", es: "SS6 - Confirmacion de comando de vaciado" }, endpointType.genericSensor);
    ack_dump_ss6.variableTypeId = 1641;
    var ack_dump_ss7 = endpoints.addEndpoint("ACK_DUMP_SS7", { en: "Dump SS7 Command Acknowledgement", es: "SS7 - Confirmacion de comando de vaciado" }, endpointType.genericSensor);
    ack_dump_ss7.variableTypeId = 1641;
    var ack_dump_ss8 = endpoints.addEndpoint("ACK_DUMP_SS8", { en: "Dump SS8 Command Acknowledgement", es: "SS8 - Confirmacion de comando de vaciado" }, endpointType.genericSensor);
    ack_dump_ss8.variableTypeId = 1641;
    var a_line_voltage_mw8 = endpoints.addEndpoint("A_LINE_VOLTAGE_MW8", { en: "MW8 - Line Voltage", es: "MW8 - Tensión de linea" }, endpointType.genericSensor);
    a_line_voltage_mw8.variableTypeId = 1640;
    var a_line_voltage_mms2 = endpoints.addEndpoint("A_LINE_VOLTAGE_MMS2", { en: "MMS2 - Line Voltage", es: "MMS2 - Tensión de linea" }, endpointType.genericSensor);
    a_line_voltage_mms2.variableTypeId = 1640;
    var a_full_tank_mw8 = endpoints.addEndpoint("A_FULL_TANK_MW8", { en: "MW8 - Full tank", es: "MW8 - Tanque lleno" }, endpointType.genericSensor);
    a_full_tank_mw8.variableTypeId = 1646;
    var s_config_maint = endpoints.addEndpoint("S_CONFIG_MAINT", { en: "In Config./Maintenance", es: "En Config./Mantenimiento" }, endpointType.genericSensor);
    s_config_maint.variableTypeId = 1651;
    var s_enabled_ss1 = endpoints.addEndpoint("S_ENABLED_SS1", { en: "SS1", es: "SS1" }, endpointType.genericSensor);
    s_enabled_ss1.variableTypeId = 1637;
    s_enabled_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_enabled_ss1.operationWarningMessage = { "en": "You are about to change the value of SS1", "es": "Está por cambiar el valor de SS1" };
    s_enabled_ss1.accessType = endpointAccessType.readWriteCommand;
    var s_enabled_ss2 = endpoints.addEndpoint("S_ENABLED_SS2", { en: "SS2", es: "SS2" }, endpointType.genericSensor);
    s_enabled_ss2.variableTypeId = 1637;
    s_enabled_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_enabled_ss2.operationWarningMessage = { "en": "You are about to change the value of SS2", "es": "Está por cambiar el valor de SS2" };
    s_enabled_ss2.accessType = endpointAccessType.readWriteCommand;
    var s_enabled_ss3 = endpoints.addEndpoint("S_ENABLED_SS3", { en: "SS3", es: "SS3" }, endpointType.genericSensor);
    s_enabled_ss3.variableTypeId = 1637;
    s_enabled_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_enabled_ss3.operationWarningMessage = { "en": "You are about to change the value of SS3", "es": "Está por cambiar el valor de SS3" };
    s_enabled_ss3.accessType = endpointAccessType.readWriteCommand;
    var s_enabled_ss4 = endpoints.addEndpoint("S_ENABLED_SS4", { en: "SS4", es: "SS4" }, endpointType.genericSensor);
    s_enabled_ss4.variableTypeId = 1637;
    s_enabled_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_enabled_ss4.operationWarningMessage = { "en": "You are about to change the value of SS4", "es": "Está por cambiar el valor de SS4" };
    s_enabled_ss4.accessType = endpointAccessType.readWriteCommand;
    var s_enabled_ss5 = endpoints.addEndpoint("S_ENABLED_SS5", { en: "SS5", es: "SS5" }, endpointType.genericSensor);
    s_enabled_ss5.variableTypeId = 1637;
    s_enabled_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_enabled_ss5.operationWarningMessage = { "en": "You are about to change the value of SS5", "es": "Está por cambiar el valor de SS5" };
    s_enabled_ss5.accessType = endpointAccessType.readWriteCommand;
    var s_enabled_ss6 = endpoints.addEndpoint("S_ENABLED_SS6", { en: "SS6", es: "SS6" }, endpointType.genericSensor);
    s_enabled_ss6.variableTypeId = 1637;
    s_enabled_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_enabled_ss6.operationWarningMessage = { "en": "You are about to change the value of SS6", "es": "Está por cambiar el valor de SS6" };
    s_enabled_ss6.accessType = endpointAccessType.readWriteCommand;
    var s_enabled_ss7 = endpoints.addEndpoint("S_ENABLED_SS7", { en: "SS7", es: "SS7" }, endpointType.genericSensor);
    s_enabled_ss7.variableTypeId = 1637;
    s_enabled_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_enabled_ss7.operationWarningMessage = { "en": "You are about to change the value of SS7", "es": "Está por cambiar el valor de SS7" };
    s_enabled_ss7.accessType = endpointAccessType.readWriteCommand;
    var s_enabled_ss8 = endpoints.addEndpoint("S_ENABLED_SS8", { en: "SS8", es: "SS8" }, endpointType.genericSensor);
    s_enabled_ss8.variableTypeId = 1637;
    s_enabled_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_enabled_ss8.operationWarningMessage = { "en": "You are about to change the value of SS8", "es": "Está por cambiar el valor de SS8" };
    s_enabled_ss8.accessType = endpointAccessType.readWriteCommand;
    var s_dpt3pt2_ss5 = endpoints.addEndpoint("S_DPT3PT2_SS5", { en: "SS5 - Differential PT3-PT2", es: "SS5 - Diferencial PT3-PT2" }, endpointType.genericSensor);
    s_dpt3pt2_ss5.variableTypeId = 1637;
    s_dpt3pt2_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_dpt3pt2_ss5.operationWarningMessage = { "en": "Security check!", "es": "Validación de seguridad!" };
    s_dpt3pt2_ss5.accessType = endpointAccessType.readWriteCommand;
    var s_dpt3pt2_ss6 = endpoints.addEndpoint("S_DPT3PT2_SS6", { en: "SS6 - Differential PT3-PT2", es: "SS6 - Diferencial PT3-PT2" }, endpointType.genericSensor);
    s_dpt3pt2_ss6.variableTypeId = 1637;
    s_dpt3pt2_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_dpt3pt2_ss6.operationWarningMessage = { "en": "Security check!", "es": "Validación de seguridad!" };
    s_dpt3pt2_ss6.accessType = endpointAccessType.readWriteCommand;
    var s_dpt3pt2_ss7 = endpoints.addEndpoint("S_DPT3PT2_SS7", { en: "SS7 - Differential PT3-PT2", es: "SS7 - Diferencial PT3-PT2" }, endpointType.genericSensor);
    s_dpt3pt2_ss7.variableTypeId = 1637;
    s_dpt3pt2_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_dpt3pt2_ss7.operationWarningMessage = { "en": "Security check!", "es": "Validación de seguridad!" };
    s_dpt3pt2_ss7.accessType = endpointAccessType.readWriteCommand;
    var s_dpt3pt2_ss8 = endpoints.addEndpoint("S_DPT3PT2_SS8", { en: "SS8 - Differential PT3-PT2", es: "SS8 - Diferencial PT3-PT2" }, endpointType.genericSensor);
    s_dpt3pt2_ss8.variableTypeId = 1637;
    s_dpt3pt2_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_dpt3pt2_ss8.operationWarningMessage = { "en": "Security check!", "es": "Validación de seguridad!" };
    s_dpt3pt2_ss8.accessType = endpointAccessType.readWriteCommand;
    var s_hipt3_ss5 = endpoints.addEndpoint("S_HIPT3_SS5", { en: "SS5 - High PT3", es: "SS5 - Alto PT3" }, endpointType.genericSensor);
    s_hipt3_ss5.variableTypeId = 1637;
    s_hipt3_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_hipt3_ss5.operationWarningMessage = { "en": "You are about to change the value of SS5 - High PT3", "es": "Está por cambiar el valor de SS5 - Alto PT3" };
    s_hipt3_ss5.accessType = endpointAccessType.readWriteCommand;
    var s_hipt3_ss6 = endpoints.addEndpoint("S_HIPT3_SS6", { en: "SS6 - High PT3", es: "SS6 - Alto PT3" }, endpointType.genericSensor);
    s_hipt3_ss6.variableTypeId = 1637;
    s_hipt3_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_hipt3_ss6.operationWarningMessage = { "en": "You are about to change the value of SS6 - High PT3", "es": "Está por cambiar el valor de SS6 - Alto PT3" };
    s_hipt3_ss6.accessType = endpointAccessType.readWriteCommand;
    var s_hipt3_ss7 = endpoints.addEndpoint("S_HIPT3_SS7", { en: "SS7 - High PT3", es: "SS7 - Alto PT3" }, endpointType.genericSensor);
    s_hipt3_ss7.variableTypeId = 1637;
    s_hipt3_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_hipt3_ss7.operationWarningMessage = { "en": "You are about to change the value of SS7 - High PT3", "es": "Está por cambiar el valor de SS7 - Alto PT3" };
    s_hipt3_ss7.accessType = endpointAccessType.readWriteCommand;
    var s_hipt3_ss8 = endpoints.addEndpoint("S_HIPT3_SS8", { en: "SS8 - High PT3", es: "SS8 - Alto PT3" }, endpointType.genericSensor);
    s_hipt3_ss8.variableTypeId = 1637;
    s_hipt3_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_hipt3_ss8.operationWarningMessage = { "en": "You are about to change the value of SS8 - High PT3", "es": "Está por cambiar el valor de SS8 - Alto PT3" };
    s_hipt3_ss8.accessType = endpointAccessType.readWriteCommand;
    var s_pdc_ss5 = endpoints.addEndpoint("S_PDC_SS5", { en: "SS5 - Pressure Drop Closing", es: "SS5 - Cierre por caida de presión" }, endpointType.genericSensor);
    s_pdc_ss5.variableTypeId = 1637;
    s_pdc_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_pdc_ss5.operationWarningMessage = { "en": "You are about to change the value of SS5 - Pressure Drop Closing", "es": "Está por cambiar el valor de SS5 - Cierre por caida de presión" };
    s_pdc_ss5.accessType = endpointAccessType.readWriteCommand;
    var s_pdc_ss6 = endpoints.addEndpoint("S_PDC_SS6", { en: "SS6 - Pressure Drop Closing", es: "SS6 - Cierre por caida de presión" }, endpointType.genericSensor);
    s_pdc_ss6.variableTypeId = 1637;
    s_pdc_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_pdc_ss6.operationWarningMessage = { "en": "You are about to change the value of SS6 - Pressure Drop Closing", "es": "Está por cambiar el valor de SS6 - Cierre por caida de presión" };
    s_pdc_ss6.accessType = endpointAccessType.readWriteCommand;
    var s_pdc_ss7 = endpoints.addEndpoint("S_PDC_SS7", { en: "SS7 - Pressure Drop Closing", es: "SS7 - Cierre por caida de presión" }, endpointType.genericSensor);
    s_pdc_ss7.variableTypeId = 1637;
    s_pdc_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_pdc_ss7.operationWarningMessage = { "en": "You are about to change the value of SS7 - Pressure Drop Closing", "es": "Está por cambiar el valor de SS7 - Cierre por caida de presión" };
    s_pdc_ss7.accessType = endpointAccessType.readWriteCommand;
    var s_pdc_ss8 = endpoints.addEndpoint("S_PDC_SS8", { en: "SS8 - Pressure Drop Closing", es: "SS8 - Cierre por caida de presión" }, endpointType.genericSensor);
    s_pdc_ss8.variableTypeId = 1637;
    s_pdc_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    s_pdc_ss8.operationWarningMessage = { "en": "You are about to change the value of SS8 - Pressure Drop Closing", "es": "Está por cambiar el valor de SS8 - Cierre por caida de presión" };
    s_pdc_ss8.accessType = endpointAccessType.readWriteCommand;
    var cmd_dump_ss5 = endpoints.addEndpoint("CMD_DUMP_SS5", { en: "Dump SS5 Command", es: "Comando de vaciado SS5" }, endpointType.genericSensor);
    cmd_dump_ss5.variableTypeId = 1633;
    cmd_dump_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_dump_ss5.operationWarningMessage = { "en": "You are about to change the value of Dump SS5 Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando de vaciado SS5, esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_dump_ss5.accessType = endpointAccessType.readWriteCommand;
    var cmd_dump_ss6 = endpoints.addEndpoint("CMD_DUMP_SS6", { en: "Dump SS6 Command", es: "Comando de vaciado SS6" }, endpointType.genericSensor);
    cmd_dump_ss6.variableTypeId = 1633;
    cmd_dump_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_dump_ss6.operationWarningMessage = { "en": "You are about to change the value of Dump SS6 Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando de vaciado SS6, esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_dump_ss6.accessType = endpointAccessType.readWriteCommand;
    var cmd_dump_ss7 = endpoints.addEndpoint("CMD_DUMP_SS7", { en: "Dump SS7 Command", es: "Comando de vaciado SS7" }, endpointType.genericSensor);
    cmd_dump_ss7.variableTypeId = 1633;
    cmd_dump_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_dump_ss7.operationWarningMessage = { "en": "You are about to change the value of Dump SS7 Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando de vaciado SS7, esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_dump_ss7.accessType = endpointAccessType.readWriteCommand;
    var cmd_dump_ss8 = endpoints.addEndpoint("CMD_DUMP_SS8", { en: "Dump SS8 Command", es: "Comando de vaciado SS8" }, endpointType.genericSensor);
    cmd_dump_ss8.variableTypeId = 1633;
    cmd_dump_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    cmd_dump_ss8.operationWarningMessage = { "en": "You are about to change the value of Dump SS8 Command, this variable accepts values between 0 and 1. This change may take a minute to take effect.", "es": "Está por cambiar el valor de Comando de vaciado SS8, esta variable acepta valores entre 0 y 1. Este cambio puede tardar un minuto en surtir efecto." };
    cmd_dump_ss8.accessType = endpointAccessType.readWriteCommand;
    var firmware = endpoints.addEndpoint("FIRMWARE", { en: "Firmware version", es: "Versión de firmware" }, endpointType.genericSensor);
    firmware.variableTypeId = 1644;
    var serial_lsw = endpoints.addEndpoint("SERIAL_LSW", { en: "Serial number", es: "Número de serie" }, endpointType.genericSensor);
    serial_lsw.variableTypeId = 1644;
    var alternative_use = endpoints.addEndpoint("ALTERNATIVE_USE", { en: "Alternative of use", es: "Uso alternativo" }, endpointType.genericSensor);
    alternative_use.variableTypeId = 1631;
    var ssq = endpoints.addEndpoint("SSQ", { en: "Sand separators quantity", es: "cantidad de Sand separators" }, endpointType.genericSensor);
    ssq.variableTypeId = 1644;
    var opmode = endpoints.addEndpoint("OPMODE", { en: "Operational mode", es: "Modo de operación" }, endpointType.genericSensor);
    opmode.variableTypeId = 1642;
    var current_process = endpoints.addEndpoint("CURRENT_PROCESS", { en: "Current process", es: "Proceso actual" }, endpointType.genericSensor);
    current_process.variableTypeId = 1634;
    var status = endpoints.addEndpoint("STATUS", { en: "General status", es: "Estado general" }, endpointType.genericSensor);
    status.variableTypeId = 1639;
    var dumps = endpoints.addEndpoint("DUMPS", { en: "Dump counter", es: "Contador de vaciados" }, endpointType.genericSensor);
    dumps.variableTypeId = 1644;
    var nd_ssx_lsw = endpoints.addEndpoint("ND_SSX_LSW", { en: "Any SSx - Next Dump", es: "Any SSx - Next Dump" }, endpointType.genericSensor);
    nd_ssx_lsw.variableTypeId = 1647;
    var nd_ss1_lsw = endpoints.addEndpoint("ND_SS1_LSW", { en: "SS1 - Next Dump", es: "SS1 - Próximo volcado" }, endpointType.genericSensor);
    nd_ss1_lsw.variableTypeId = 1647;
    var nd_ss2_lsw = endpoints.addEndpoint("ND_SS2_LSW", { en: "SS2 - Next Dump", es: "SS2 - Próximo volcado" }, endpointType.genericSensor);
    nd_ss2_lsw.variableTypeId = 1647;
    var nd_ss3_lsw = endpoints.addEndpoint("ND_SS3_LSW", { en: "SS3 - Next Dump", es: "SS3 - Próximo volcado" }, endpointType.genericSensor);
    nd_ss3_lsw.variableTypeId = 1647;
    var nd_ss4_lsw = endpoints.addEndpoint("ND_SS4_LSW", { en: "SS4 - Next Dump", es: "SS4 - Próximo volcado" }, endpointType.genericSensor);
    nd_ss4_lsw.variableTypeId = 1647;
    var pv1 = endpoints.addEndpoint("PV1", { en: "PV1 Status", es: "Estado de PV1" }, endpointType.genericSensor);
    pv1.variableTypeId = 1649;
    var pv2 = endpoints.addEndpoint("PV2", { en: "PV2 Status", es: "Estado de PV2" }, endpointType.genericSensor);
    pv2.variableTypeId = 1649;
    var cv3 = endpoints.addEndpoint("CV3", { en: "CV3 Status", es: "Estado de CV3" }, endpointType.genericSensor);
    cv3.variableTypeId = 1649;
    var pv1_ss1 = endpoints.addEndpoint("PV1_SS1", { en: "SS1 PV1´ Status", es: "Estado de SS1 PV1" }, endpointType.genericSensor);
    pv1_ss1.variableTypeId = 1649;
    var pv1_ss2 = endpoints.addEndpoint("PV1_SS2", { en: "SS2 PV1´ Status", es: "Estado de SS2 PV1" }, endpointType.genericSensor);
    pv1_ss2.variableTypeId = 1649;
    var pv1_ss3 = endpoints.addEndpoint("PV1_SS3", { en: "SS3 PV1´ Status", es: "Estado de SS3 PV1" }, endpointType.genericSensor);
    pv1_ss3.variableTypeId = 1649;
    var pv1_ss4 = endpoints.addEndpoint("PV1_SS4", { en: "SS4 PV1´ Status", es: "Estado de SS4 PV1" }, endpointType.genericSensor);
    pv1_ss4.variableTypeId = 1649;
    var sieve_status = endpoints.addEndpoint("SIEVE_STATUS", { en: "Sieve Status", es: "Estado de sieve" }, endpointType.genericSensor);
    sieve_status.variableTypeId = 1649;
    var pt3_ss1 = endpoints.addEndpoint("PT3_SS1", { en: "SS1 PT3", es: "SS1 PT3" }, endpointType.pressureSensor);
    var pt3_ss2 = endpoints.addEndpoint("PT3_SS2", { en: "SS2 PT3", es: "SS2 PT3" }, endpointType.pressureSensor);
    var pt3_ss3 = endpoints.addEndpoint("PT3_SS3", { en: "SS3 PT3", es: "SS3 PT3" }, endpointType.pressureSensor);
    var pt3_ss4 = endpoints.addEndpoint("PT3_SS4", { en: "SS4 PT3", es: "SS4 PT3" }, endpointType.pressureSensor);
    var pt2_ss1 = endpoints.addEndpoint("PT2_SS1", { en: "SS1 PT2", es: "SS1 PT2" }, endpointType.pressureSensor);
    var pt2_ss2 = endpoints.addEndpoint("PT2_SS2", { en: "SS2 PT2", es: "SS2 PT2" }, endpointType.pressureSensor);
    var pt2_ss3 = endpoints.addEndpoint("PT2_SS3", { en: "SS3 PT2", es: "SS3 PT2" }, endpointType.pressureSensor);
    var pt2_ss4 = endpoints.addEndpoint("PT2_SS4", { en: "SS4 PT2", es: "SS4 PT2" }, endpointType.pressureSensor);
    var pt3_ss5 = endpoints.addEndpoint("PT3_SS5", { en: "SS5 PT3", es: "SS5 PT3" }, endpointType.pressureSensor);
    var pt3_ss6 = endpoints.addEndpoint("PT3_SS6", { en: "SS6 PT3", es: "SS6 PT3" }, endpointType.pressureSensor);
    var pt3_ss7 = endpoints.addEndpoint("PT3_SS7", { en: "SS7 PT3", es: "SS7 PT3" }, endpointType.pressureSensor);
    var pt3_ss8 = endpoints.addEndpoint("PT3_SS8", { en: "SS8 PT3", es: "SS8 PT3" }, endpointType.pressureSensor);
    var pt1 = endpoints.addEndpoint("PT1", { en: "PT1 ", es: "PT1" }, endpointType.pressureSensor);
    var wgt1_mw8 = endpoints.addEndpoint("WGT1_MW8", { en: "mW8 WG1 ", es: "mW8 WG1" }, endpointType.genericSensor);
    wgt1_mw8.variableTypeId = 1650;
    var pt2_ss5 = endpoints.addEndpoint("PT2_SS5", { en: "SS5 PT2 ", es: "SS5 PT2" }, endpointType.pressureSensor);
    var pt2_ss6 = endpoints.addEndpoint("PT2_SS6", { en: "SS6 PT2 ", es: "SS6 PT2" }, endpointType.pressureSensor);
    var pt2_ss7 = endpoints.addEndpoint("PT2_SS7", { en: "SS7 PT2 ", es: "SS7 PT2" }, endpointType.pressureSensor);
    var pt2_ss8 = endpoints.addEndpoint("PT2_SS8", { en: "SS8 PT2 ", es: "SS8 PT2 " }, endpointType.pressureSensor);
    var ap = endpoints.addEndpoint("AP", { en: "mSand AP ", es: "Valor actual demSand AP" }, endpointType.pressureSensor);
    var ap_mms = endpoints.addEndpoint("AP_MMS", { en: "MMS AP ", es: "MMS AP" }, endpointType.pressureSensor);
    var ap_mw8 = endpoints.addEndpoint("AP_MW8", { en: "mW8 AP ", es: "mW8 AP" }, endpointType.pressureSensor);
    var cb = endpoints.addEndpoint("CB", { en: "mSand Control Battery", es: "Batería de control de mSand" }, endpointType.voltageSensor);
    var cb_mms = endpoints.addEndpoint("CB_MMS", { en: "MMS Control Battery", es: "Batería de control de MMS" }, endpointType.voltageSensor);
    var cb_mw8 = endpoints.addEndpoint("CB_MW8", { en: "mW8 Control Battery", es: "Batería de control de mW8" }, endpointType.voltageSensor);
    var pb = endpoints.addEndpoint("PB", { en: "mSand Power Battery", es: "Potencia de Batería de mSand" }, endpointType.voltageSensor);
    var pb_mms = endpoints.addEndpoint("PB_MMS", { en: "MMS Power Battery", es: "Potencia de Batería de MMS" }, endpointType.voltageSensor);
    var pb_mw8 = endpoints.addEndpoint("PB_MW8", { en: "mW8 Power Battery", es: "Potencia de Batería de mW8" }, endpointType.voltageSensor);
    var ct = endpoints.addEndpoint("CT", { en: "mSand Cabinet Temperature", es: "Temperatura del Gabinete de mSand" }, endpointType.temperatureSensor);
    var tbd_ss1 = endpoints.addEndpoint("TBD_SS1", { en: "SS1 Time Between Dumps", es: "Tiempo entre vaciados de SS1" }, endpointType.genericSensor);
    tbd_ss1.variableTypeId = 1647;
    tbd_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    tbd_ss1.operationWarningMessage = { "en": "You are about to change the value of SS1 Time Between Dumps, this variable accepts values between 5 and 10000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS1, esta variable acepta valores entre 5 y 10000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    tbd_ss1.accessType = endpointAccessType.readWriteCommand;
    var tbd_ss2 = endpoints.addEndpoint("TBD_SS2", { en: "SS2 Time Between Dumps", es: "Tiempo entre vaciados de SS2" }, endpointType.genericSensor);
    tbd_ss2.variableTypeId = 1647;
    tbd_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    tbd_ss2.operationWarningMessage = { "en": "You are about to change the value of SS2 Time Between Dumps, this variable accepts values between 5 and 10000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS2, esta variable acepta valores entre 5 y 10000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    tbd_ss2.accessType = endpointAccessType.readWriteCommand;
    var tbd_ss3 = endpoints.addEndpoint("TBD_SS3", { en: "SS3 Time Between Dumps", es: "Tiempo entre vaciados de SS3" }, endpointType.genericSensor);
    tbd_ss3.variableTypeId = 1647;
    tbd_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    tbd_ss3.operationWarningMessage = { "en": "You are about to change the value of SS3 Time Between Dumps, this variable accepts values between 5 and 10000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS3, esta variable acepta valores entre 5 y 10000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    tbd_ss3.accessType = endpointAccessType.readWriteCommand;
    var tbd_ss4 = endpoints.addEndpoint("TBD_SS4", { en: "SS4 Time Between Dumps", es: "Tiempo entre vaciados de SS4" }, endpointType.genericSensor);
    tbd_ss4.variableTypeId = 1647;
    tbd_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    tbd_ss4.operationWarningMessage = { "en": "You are about to change the value of SS4 Time Between Dumps, this variable accepts values between 5 and 10000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS4, esta variable acepta valores entre 5 y 10000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    tbd_ss4.accessType = endpointAccessType.readWriteCommand;
    var dpt3pt2_ss1 = endpoints.addEndpoint("DPT3PT2_SS1", { en: "SS1 - Differential PT3-PT2", es: "SS1 - Diferencial PT3-PT2" }, endpointType.pressureSensor);
    dpt3pt2_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt3pt2_ss1.operationWarningMessage = { "en": "You are about to change the value of SS1 - Differential PT3-PT2, this variable accepts values between 5 and 5000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS1 - Diferencial PT3-PT2, esta variable acepta valores entre 5 y 5000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt3pt2_ss1.accessType = endpointAccessType.readWriteCommand;
    var dpt3pt2_ss2 = endpoints.addEndpoint("DPT3PT2_SS2", { en: "SS2 - Differential PT3-PT2", es: "SS2 - Diferencial PT3-PT2" }, endpointType.pressureSensor);
    dpt3pt2_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt3pt2_ss2.operationWarningMessage = { "en": "You are about to change the value of SS2 - Differential PT3-PT2, this variable accepts values between 5 and 5000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS2 - Diferencial PT3-PT2, esta variable acepta valores entre 5 y 5000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt3pt2_ss2.accessType = endpointAccessType.readWriteCommand;
    var dpt3pt2_ss3 = endpoints.addEndpoint("DPT3PT2_SS3", { en: "SS3 - Differential PT3-PT2", es: "SS3 - Diferencial PT3-PT2" }, endpointType.pressureSensor);
    dpt3pt2_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt3pt2_ss3.operationWarningMessage = { "en": "You are about to change the value of SS3 - Differential PT3-PT2, this variable accepts values between 5 and 5000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS3 - Diferencial PT3-PT2, esta variable acepta valores entre 5 y 5000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt3pt2_ss3.accessType = endpointAccessType.readWriteCommand;
    var dpt3pt2_ss4 = endpoints.addEndpoint("DPT3PT2_SS4", { en: "SS4 - Differential PT3-PT2", es: "SS4 - Diferencial PT3-PT2" }, endpointType.pressureSensor);
    dpt3pt2_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt3pt2_ss4.operationWarningMessage = { "en": "You are about to change the value of SS4 - Differential PT3-PT2, this variable accepts values between 5 and 5000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS4 - Diferencial PT3-PT2, esta variable acepta valores entre 5 y 5000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt3pt2_ss4.accessType = endpointAccessType.readWriteCommand;
    var hipt3_ss1 = endpoints.addEndpoint("HIPT3_SS1", { en: "SS1 - High PT3", es: "SS1 - PT3 Alto" }, endpointType.pressureSensor);
    hipt3_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    hipt3_ss1.operationWarningMessage = { "en": "You are about to change the value of SS1 - High PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS1 - PT3 Alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    hipt3_ss1.accessType = endpointAccessType.readWriteCommand;
    var hipt3_ss2 = endpoints.addEndpoint("HIPT3_SS2", { en: "SS2 - High PT3", es: "SS2 - PT3 Alto" }, endpointType.pressureSensor);
    hipt3_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    hipt3_ss2.operationWarningMessage = { "en": "You are about to change the value of SS2 - High PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS2 - PT3 Alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    hipt3_ss2.accessType = endpointAccessType.readWriteCommand;
    var hipt3_ss3 = endpoints.addEndpoint("HIPT3_SS3", { en: "SS3 - High PT3", es: "SS3 - PT3 Alto" }, endpointType.pressureSensor);
    hipt3_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    hipt3_ss3.operationWarningMessage = { "en": "You are about to change the value of SS3 - High PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS3 - PT3 Alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    hipt3_ss3.accessType = endpointAccessType.readWriteCommand;
    var hipt3_ss4 = endpoints.addEndpoint("HIPT3_SS4", { en: "SS4 - High PT3", es: "SS4 - PT3 Alto" }, endpointType.pressureSensor);
    hipt3_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    hipt3_ss4.operationWarningMessage = { "en": "You are about to change the value of SS4 - High PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS4 - PT3 Alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    hipt3_ss4.accessType = endpointAccessType.readWriteCommand;
    var hipt3_ss5 = endpoints.addEndpoint("HIPT3_SS5", { en: "SS5 - High PT3", es: "SS5 - PT3 Alto" }, endpointType.pressureSensor);
    hipt3_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    hipt3_ss5.operationWarningMessage = { "en": "You are about to change the value of SS5 - High PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS5 - PT3 Alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    hipt3_ss5.accessType = endpointAccessType.readWriteCommand;
    var hipt3_ss6 = endpoints.addEndpoint("HIPT3_SS6", { en: "SS6 - High PT3", es: "SS6 - PT3 Alto" }, endpointType.pressureSensor);
    hipt3_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    hipt3_ss6.operationWarningMessage = { "en": "You are about to change the value of SS6 - High PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS6 - PT3 Alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    hipt3_ss6.accessType = endpointAccessType.readWriteCommand;
    var hipt3_ss7 = endpoints.addEndpoint("HIPT3_SS7", { en: "SS7 - High PT3", es: "SS7 - PT3 Alto" }, endpointType.pressureSensor);
    hipt3_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    hipt3_ss7.operationWarningMessage = { "en": "You are about to change the value of SS7 - High PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS7 - PT3 Alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    hipt3_ss7.accessType = endpointAccessType.readWriteCommand;
    var hipt3_ss8 = endpoints.addEndpoint("HIPT3_SS8", { en: "SS8 - High PT3", es: "SS8 - PT3 Alto" }, endpointType.pressureSensor);
    hipt3_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    hipt3_ss8.operationWarningMessage = { "en": "You are about to change the value of SS8 - High PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS8 - PT3 Alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    hipt3_ss8.accessType = endpointAccessType.readWriteCommand;
    var h_hipt3_ss1 = endpoints.addEndpoint("H_HIPT3_SS1", { en: "SS1 - High high PT3", es: "SS1 - PT3 Alto alto" }, endpointType.pressureSensor);
    h_hipt3_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    h_hipt3_ss1.operationWarningMessage = { "en": "You are about to change the value of SS1 - High high PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS1 - PT3 Alto alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    h_hipt3_ss1.accessType = endpointAccessType.readWriteCommand;
    var h_hipt3_ss2 = endpoints.addEndpoint("H_HIPT3_SS2", { en: "SS2 - High high PT3", es: "SS2 - PT3 Alto alto" }, endpointType.pressureSensor);
    h_hipt3_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    h_hipt3_ss2.operationWarningMessage = { "en": "You are about to change the value of SS2 - High high PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS2 - PT3 Alto alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    h_hipt3_ss2.accessType = endpointAccessType.readWriteCommand;
    var h_hipt3_ss3 = endpoints.addEndpoint("H_HIPT3_SS3", { en: "SS3 - High high PT3", es: "SS3 - PT3 Alto alto" }, endpointType.pressureSensor);
    h_hipt3_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    h_hipt3_ss3.operationWarningMessage = { "en": "You are about to change the value of SS3 - High high PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS3 - PT3 Alto alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    h_hipt3_ss3.accessType = endpointAccessType.readWriteCommand;
    var h_hipt3_ss4 = endpoints.addEndpoint("H_HIPT3_SS4", { en: "SS4 - High high PT3", es: "SS4 - PT3 Alto alto" }, endpointType.pressureSensor);
    h_hipt3_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    h_hipt3_ss4.operationWarningMessage = { "en": "You are about to change the value of SS4 - High high PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS4 - PT3 Alto alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    h_hipt3_ss4.accessType = endpointAccessType.readWriteCommand;
    var dhp_ss1 = endpoints.addEndpoint("DHP_SS1", { en: "SS1 - Dump Holding Period", es: "Período de retención de vaciado de SS1" }, endpointType.genericSensor);
    dhp_ss1.variableTypeId = 1648;
    dhp_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dhp_ss1.operationWarningMessage = { "en": "You are about to change the value of SS1 - Dump Holding Period, this variable accepts values between 1 and 60. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Período de retención de vaciado de SS1, esta variable acepta valores entre 1 y 60. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dhp_ss1.accessType = endpointAccessType.readWriteCommand;
    var dhp_ss2 = endpoints.addEndpoint("DHP_SS2", { en: "SS2 - Dump Holding Period", es: "Período de retención de vaciado de SS2" }, endpointType.genericSensor);
    dhp_ss2.variableTypeId = 1648;
    dhp_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dhp_ss2.operationWarningMessage = { "en": "You are about to change the value of SS2 - Dump Holding Period, this variable accepts values between 1 and 60. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Período de retención de vaciado de SS2, esta variable acepta valores entre 1 y 60. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dhp_ss2.accessType = endpointAccessType.readWriteCommand;
    var dhp_ss3 = endpoints.addEndpoint("DHP_SS3", { en: "SS3 - Dump Holding Period", es: "Período de retención de vaciado de SS3" }, endpointType.genericSensor);
    dhp_ss3.variableTypeId = 1648;
    dhp_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dhp_ss3.operationWarningMessage = { "en": "You are about to change the value of SS3 - Dump Holding Period, this variable accepts values between 1 and 60. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Período de retención de vaciado de SS3, esta variable acepta valores entre 1 y 60. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dhp_ss3.accessType = endpointAccessType.readWriteCommand;
    var dhp_ss4 = endpoints.addEndpoint("DHP_SS4", { en: "SS4 - Dump Holding Period", es: "Período de retención de vaciado de SS4" }, endpointType.genericSensor);
    dhp_ss4.variableTypeId = 1648;
    dhp_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dhp_ss4.operationWarningMessage = { "en": "You are about to change the value of SS4 - Dump Holding Period, this variable accepts values between 1 and 60. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Período de retención de vaciado de SS4, esta variable acepta valores entre 1 y 60. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dhp_ss4.accessType = endpointAccessType.readWriteCommand;
    var dpt1_ss1 = endpoints.addEndpoint("DPT1_SS1", { en: "SS1 - Delta PT1 to end dump", es: "SS1 - Delta PT1 para terminar vaciado" }, endpointType.genericSensor);
    dpt1_ss1.variableTypeId = 1643;
    dpt1_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt1_ss1.operationWarningMessage = { "en": "You are about to change the value of SS1 - Delta PT1 to end dump, this variable accepts values between 0 and 100. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS1 - Delta PT1 para terminar vaciado, esta variable acepta valores entre 0 y 100. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt1_ss1.accessType = endpointAccessType.readWriteCommand;
    var dpt1_ss2 = endpoints.addEndpoint("DPT1_SS2", { en: "SS2 - Delta PT1 to end dump", es: "SS2 - Delta PT1 para terminar vaciado" }, endpointType.genericSensor);
    dpt1_ss2.variableTypeId = 1643;
    dpt1_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt1_ss2.operationWarningMessage = { "en": "You are about to change the value of SS2 - Delta PT1 to end dump, this variable accepts values between 0 and 100. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS2 - Delta PT1 para terminar vaciado, esta variable acepta valores entre 0 y 100. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt1_ss2.accessType = endpointAccessType.readWriteCommand;
    var dpt1_ss3 = endpoints.addEndpoint("DPT1_SS3", { en: "SS3 - Delta PT1 to end dump", es: "SS3 - Delta PT1 para terminar vaciado" }, endpointType.genericSensor);
    dpt1_ss3.variableTypeId = 1643;
    dpt1_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt1_ss3.operationWarningMessage = { "en": "You are about to change the value of SS3 - Delta PT1 to end dump, this variable accepts values between 0 and 100. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS3 - Delta PT1 para terminar vaciado, esta variable acepta valores entre 0 y 100. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt1_ss3.accessType = endpointAccessType.readWriteCommand;
    var dpt1_ss4 = endpoints.addEndpoint("DPT1_SS4", { en: "SS4 - Delta PT1 to end dump", es: "SS4 - Delta PT1 para terminar vaciado" }, endpointType.genericSensor);
    dpt1_ss4.variableTypeId = 1643;
    dpt1_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt1_ss4.operationWarningMessage = { "en": "You are about to change the value of SS4 - Delta PT1 to end dump, this variable accepts values between 0 and 100. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS4 - Delta PT1 para terminar vaciado, esta variable acepta valores entre 0 y 100. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt1_ss4.accessType = endpointAccessType.readWriteCommand;
    var ttd_ss1 = endpoints.addEndpoint("TTD_SS1", { en: "SS1 - Time to drain", es: "Tiempo para drenar SS1" }, endpointType.genericSensor);
    ttd_ss1.variableTypeId = 1648;
    ttd_ss1.operationSecurityLevel = endpointOperationSecurityLevel.high;
    ttd_ss1.operationWarningMessage = { "en": "You are about to change the value of SS1 - Time to drain", "es": "Está por cambiar el valor de Tiempo para drenar SS1" };
    ttd_ss1.accessType = endpointAccessType.readWriteCommand;
    var ttd_ss2 = endpoints.addEndpoint("TTD_SS2", { en: "SS2 - Time to drain", es: "Tiempo para drenar SS2" }, endpointType.genericSensor);
    ttd_ss2.variableTypeId = 1648;
    ttd_ss2.operationSecurityLevel = endpointOperationSecurityLevel.high;
    ttd_ss2.operationWarningMessage = { "en": "You are about to change the value of SS2 - Time to drain", "es": "Está por cambiar el valor de Tiempo para drenar SS2" };
    ttd_ss2.accessType = endpointAccessType.readWriteCommand;
    var ttd_ss3 = endpoints.addEndpoint("TTD_SS3", { en: "SS3 - Time to drain", es: "Tiempo para drenar SS3" }, endpointType.genericSensor);
    ttd_ss3.variableTypeId = 1648;
    ttd_ss3.operationSecurityLevel = endpointOperationSecurityLevel.high;
    ttd_ss3.operationWarningMessage = { "en": "You are about to change the value of SS3 - Time to drain", "es": "Está por cambiar el valor de Tiempo para drenar SS3" };
    ttd_ss3.accessType = endpointAccessType.readWriteCommand;
    var ttd_ss4 = endpoints.addEndpoint("TTD_SS4", { en: "SS4 - Time to drain", es: "Tiempo para drenar SS4" }, endpointType.genericSensor);
    ttd_ss4.variableTypeId = 1648;
    ttd_ss4.operationSecurityLevel = endpointOperationSecurityLevel.high;
    ttd_ss4.operationWarningMessage = { "en": "You are about to change the value of SS4 - Time to drain", "es": "Está por cambiar el valor de Tiempo para drenar SS4" };
    ttd_ss4.accessType = endpointAccessType.readWriteCommand;
    var testseat = endpoints.addEndpoint("TESTSEAT", { en: "Test PV1&PV2 Seat Every", es: "Test PV1&PV2 Seat Every" }, endpointType.genericSensor);
    testseat.variableTypeId = 1644;
    testseat.operationSecurityLevel = endpointOperationSecurityLevel.high;
    testseat.operationWarningMessage = { "en": "You are about to change the value of Test PV1&PV2 Seat Every, this variable accepts values between 1 and 100. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Test PV1&PV2 Seat Every, esta variable acepta valores entre 1 y 100. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    testseat.accessType = endpointAccessType.readWriteCommand;
    var hp_st = endpoints.addEndpoint("HP_ST", { en: "Holding Period For Valve Seat Test", es: "Período de espera para prueba de asientamiento de la válvula" }, endpointType.genericSensor);
    hp_st.variableTypeId = 1648;
    var vt = endpoints.addEndpoint("VT", { en: "Vent timeout", es: "Tiempo de espera de ventilación" }, endpointType.genericSensor);
    vt.variableTypeId = 1648;
    vt.operationSecurityLevel = endpointOperationSecurityLevel.high;
    vt.operationWarningMessage = { "en": "You are about to change the value of Vent timeout, this variable accepts values between 1 and 120. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Tiempo de espera de ventilación, esta variable acepta valores entre 1 y 120. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    vt.accessType = endpointAccessType.readWriteCommand;
    var dpt1_test = endpoints.addEndpoint("DPT1_TEST", { en: "Delta PT1 for test", es: "Delta PT1 para la prueba" }, endpointType.genericSensor);
    dpt1_test.variableTypeId = 1643;
    dpt1_test.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt1_test.operationWarningMessage = { "en": "You are about to change the value of Delta PT1 for test, this variable accepts values between 0 and 100. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Delta PT1 para la prueba, esta variable acepta valores entre 0 y 100. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt1_test.accessType = endpointAccessType.readWriteCommand;
    var emptying_time_mw8 = endpoints.addEndpoint("EMPTYING_TIME_MW8", { en: "mW8 Hopper Emptying Time", es: "Tiempo de vaciado de la tolva de mW8" }, endpointType.genericSensor);
    emptying_time_mw8.variableTypeId = 1648;
    var nd_ss5_lsw = endpoints.addEndpoint("ND_SS5_LSW", { en: "SS5 - Next Dump", es: "SS5 - Próximo volcado" }, endpointType.genericSensor);
    nd_ss5_lsw.variableTypeId = 1647;
    var nd_ss6_lsw = endpoints.addEndpoint("ND_SS6_LSW", { en: "SS6 - Next Dump", es: "SS6 - Próximo volcado" }, endpointType.genericSensor);
    nd_ss6_lsw.variableTypeId = 1647;
    var nd_ss7_lsw = endpoints.addEndpoint("ND_SS7_LSW", { en: "SS7 - Next Dump", es: "SS7 - Próximo volcado" }, endpointType.genericSensor);
    nd_ss7_lsw.variableTypeId = 1647;
    var nd_ss8_lsw = endpoints.addEndpoint("ND_SS8_LSW", { en: "SS8 - Next Dump", es: "SS8 - Próximo volcado" }, endpointType.genericSensor);
    nd_ss8_lsw.variableTypeId = 1647;
    var pv1_ss5 = endpoints.addEndpoint("PV1_SS5", { en: "SS5 PV1´ Status", es: "Estado de PV1´ de SS5" }, endpointType.genericSensor);
    pv1_ss5.variableTypeId = 1649;
    var pv1_ss6 = endpoints.addEndpoint("PV1_SS6", { en: "SS6 PV1´ Status", es: "Estado de PV1´ de SS6" }, endpointType.genericSensor);
    pv1_ss6.variableTypeId = 1649;
    var pv1_ss7 = endpoints.addEndpoint("PV1_SS7", { en: "SS7 PV1´ Status", es: "Estado de PV1´ de SS7" }, endpointType.genericSensor);
    pv1_ss7.variableTypeId = 1649;
    var pv1_ss8 = endpoints.addEndpoint("PV1_SS8", { en: "SS8 PV1´ Status", es: "Estado de PV1´ de SS8" }, endpointType.genericSensor);
    pv1_ss8.variableTypeId = 1649;
    var p1 = endpoints.addEndpoint("P1", { en: "P1 ", es: "P1" }, endpointType.pressureSensor);
    var ap_mms2 = endpoints.addEndpoint("AP_MMS2", { en: "MMS2 AP ", es: "AP MMS2" }, endpointType.pressureSensor);
    var cb_mms2 = endpoints.addEndpoint("CB_MMS2", { en: "MMS2 Control Battery", es: "Batería de control de MMS2" }, endpointType.voltageSensor);
    var pb_mms2 = endpoints.addEndpoint("PB_MMS2", { en: "MMS2 Power Battery", es: "Poder de Batería de MMS2" }, endpointType.voltageSensor);
    var ltot_lsw = endpoints.addEndpoint("LTOT_LSW", { en: "Last Test Operation Time", es: "Last Test Operation Time" }, endpointType.genericSensor);
    ltot_lsw.variableTypeId = 1638;
    var tr = endpoints.addEndpoint("TR", { en: "Test Result", es: "Test Result" }, endpointType.genericSensor);
    tr.variableTypeId = 1644;
    var p1pt1iv = endpoints.addEndpoint("P1PT1IV", { en: "P1/PT1 Incorrect Value", es: "Valor incorrecto P1/PT1" }, endpointType.pressureSensor);
    var lwot_ss1_lsw = endpoints.addEndpoint("LWOT_SS1_LSW", { en: "SS1 - Last Weighing Operation Time", es: "SS1 - Fecha y hora de la última operación de pesaje" }, endpointType.genericSensor);
    lwot_ss1_lsw.variableTypeId = 1638;
    var tw_ss1 = endpoints.addEndpoint("TW_SS1", { en: "SS1 - Tare Weight", es: "Peso de Tara de SS1" }, endpointType.genericSensor);
    tw_ss1.variableTypeId = 1650;
    var iw_ss1 = endpoints.addEndpoint("IW_SS1", { en: "SS1 - Initial Weight", es: "Peso incial de SS1" }, endpointType.genericSensor);
    iw_ss1.variableTypeId = 1650;
    var dw_ss1 = endpoints.addEndpoint("DW_SS1", { en: "SS1 - Drained Weight", es: "Peso escurrido de SS1" }, endpointType.genericSensor);
    dw_ss1.variableTypeId = 1650;
    var lwot_ss2_lsw = endpoints.addEndpoint("LWOT_SS2_LSW", { en: "SS2 - Last Weighing Operation Time", es: "SS2 - Fecha y hora de la última operación de pesaje" }, endpointType.genericSensor);
    lwot_ss2_lsw.variableTypeId = 1638;
    var tw_ss2 = endpoints.addEndpoint("TW_SS2", { en: "SS2 - Tare Weight", es: "Peso de Tara de SS2" }, endpointType.genericSensor);
    tw_ss2.variableTypeId = 1650;
    var iw_ss2 = endpoints.addEndpoint("IW_SS2", { en: "SS2 - Initial Weight", es: "Peso incial de SS2" }, endpointType.genericSensor);
    iw_ss2.variableTypeId = 1650;
    var dw_ss2 = endpoints.addEndpoint("DW_SS2", { en: "SS2 - Drained Weight", es: "Peso escurrido de SS2" }, endpointType.genericSensor);
    dw_ss2.variableTypeId = 1650;
    var lwot_ss3_lsw = endpoints.addEndpoint("LWOT_SS3_LSW", { en: "SS3 - Last Weighing Operation Time", es: "SS3 - Fecha y hora de la última operación de pesaje" }, endpointType.genericSensor);
    lwot_ss3_lsw.variableTypeId = 1638;
    var tw_ss3 = endpoints.addEndpoint("TW_SS3", { en: "SS3 - Tare Weight", es: "Peso de Tara de SS3" }, endpointType.genericSensor);
    tw_ss3.variableTypeId = 1650;
    var iw_ss3 = endpoints.addEndpoint("IW_SS3", { en: "SS3 - Initial Weight", es: "Peso incial de SS3" }, endpointType.genericSensor);
    iw_ss3.variableTypeId = 1650;
    var dw_ss3 = endpoints.addEndpoint("DW_SS3", { en: "SS3 - Drained Weight", es: "Peso escurrido de SS3" }, endpointType.genericSensor);
    dw_ss3.variableTypeId = 1650;
    var lwot_ss4_lsw = endpoints.addEndpoint("LWOT_SS4_LSW", { en: "SS4 - Last Weighing Operation Time", es: "SS4 - Fecha y hora de la última operación de pesaje" }, endpointType.genericSensor);
    lwot_ss4_lsw.variableTypeId = 1638;
    var tw_ss4 = endpoints.addEndpoint("TW_SS4", { en: "SS4 - Tare Weight", es: "Peso de Tara de SS4" }, endpointType.genericSensor);
    tw_ss4.variableTypeId = 1650;
    var iw_ss4 = endpoints.addEndpoint("IW_SS4", { en: "SS4 - Initial Weight", es: "Peso incial de SS4" }, endpointType.genericSensor);
    iw_ss4.variableTypeId = 1650;
    var dw_ss4 = endpoints.addEndpoint("DW_SS4", { en: "SS4 - Drained Weight", es: "Peso escurrido de SS4" }, endpointType.genericSensor);
    dw_ss4.variableTypeId = 1650;
    var lwot_ss5_lsw = endpoints.addEndpoint("LWOT_SS5_LSW", { en: "SS5 - Last Weighing Operation Time", es: "SS5 - Fecha y hora de la última operación de pesaje" }, endpointType.genericSensor);
    lwot_ss5_lsw.variableTypeId = 1638;
    var tw_ss5 = endpoints.addEndpoint("TW_SS5", { en: "SS5 - Tare Weight", es: "Peso de Tara de SS5" }, endpointType.genericSensor);
    tw_ss5.variableTypeId = 1650;
    var iw_ss5 = endpoints.addEndpoint("IW_SS5", { en: "SS5 - Initial Weight", es: "Peso incial de SS5" }, endpointType.genericSensor);
    iw_ss5.variableTypeId = 1650;
    var dw_ss5 = endpoints.addEndpoint("DW_SS5", { en: "SS5 - Drained Weight", es: "Peso escurrido de SS5" }, endpointType.genericSensor);
    dw_ss5.variableTypeId = 1650;
    var lwot_ss6_lsw = endpoints.addEndpoint("LWOT_SS6_LSW", { en: "SS6 - Last Weighing Operation Time", es: "SS6 - Fecha y hora de la última operación de pesaje" }, endpointType.genericSensor);
    lwot_ss6_lsw.variableTypeId = 1638;
    var tw_ss6 = endpoints.addEndpoint("TW_SS6", { en: "SS6 - Tare Weight", es: "Peso de Tara de SS6" }, endpointType.genericSensor);
    tw_ss6.variableTypeId = 1650;
    var iw_ss6 = endpoints.addEndpoint("IW_SS6", { en: "SS6 - Initial Weight", es: "Peso incial de SS6" }, endpointType.genericSensor);
    iw_ss6.variableTypeId = 1650;
    var dw_ss6 = endpoints.addEndpoint("DW_SS6", { en: "SS6 - Drained Weight", es: "Peso escurrido de SS6" }, endpointType.genericSensor);
    dw_ss6.variableTypeId = 1650;
    var lwot_ss7_lsw = endpoints.addEndpoint("LWOT_SS7_LSW", { en: "SS7 - Last Weighing Operation Time", es: "SS7 - Fecha y hora de la última operación de pesaje" }, endpointType.genericSensor);
    lwot_ss7_lsw.variableTypeId = 1638;
    var tw_ss7 = endpoints.addEndpoint("TW_SS7", { en: "SS7 - Tare Weight", es: "Peso de Tara de SS7" }, endpointType.genericSensor);
    tw_ss7.variableTypeId = 1650;
    var iw_ss7 = endpoints.addEndpoint("IW_SS7", { en: "SS7 - Initial Weight", es: "Peso incial de SS7" }, endpointType.genericSensor);
    iw_ss7.variableTypeId = 1650;
    var dw_ss7 = endpoints.addEndpoint("DW_SS7", { en: "SS7 - Drained Weight", es: "Peso escurrido de SS7" }, endpointType.genericSensor);
    dw_ss7.variableTypeId = 1650;
    var lwot_ss8_lsw = endpoints.addEndpoint("LWOT_SS8_LSW", { en: "SS8 - Last Weighing Operation Time", es: "SS8 - Fecha y hora de la última operación de pesaje" }, endpointType.genericSensor);
    lwot_ss8_lsw.variableTypeId = 1638;
    var tw_ss8 = endpoints.addEndpoint("TW_SS8", { en: "SS8 - Tare Weight", es: "Peso de Tara de SS8" }, endpointType.genericSensor);
    tw_ss8.variableTypeId = 1650;
    var iw_ss8 = endpoints.addEndpoint("IW_SS8", { en: "SS8 - Initial Weight", es: "Peso incial de SS8" }, endpointType.genericSensor);
    iw_ss8.variableTypeId = 1650;
    var dw_ss8 = endpoints.addEndpoint("DW_SS8", { en: "SS8 - Drained Weight", es: "Peso escurrido de SS8" }, endpointType.genericSensor);
    dw_ss8.variableTypeId = 1650;
    var tbd_ss5 = endpoints.addEndpoint("TBD_SS5", { en: "SS5 Time Between Dumps", es: "Tiempo entre vaciados de SS5" }, endpointType.genericSensor);
    tbd_ss5.variableTypeId = 1647;
    tbd_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    tbd_ss5.operationWarningMessage = { "en": "You are about to change the value of SS5 Time Between Dumps, this variable accepts values between 5 and 10000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS5, esta variable acepta valores entre 5 y 10000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    tbd_ss5.accessType = endpointAccessType.readWriteCommand;
    var tbd_ss6 = endpoints.addEndpoint("TBD_SS6", { en: "SS6 Time Between Dumps", es: "Tiempo entre vaciados de SS6" }, endpointType.genericSensor);
    tbd_ss6.variableTypeId = 1647;
    tbd_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    tbd_ss6.operationWarningMessage = { "en": "You are about to change the value of SS6 Time Between Dumps, this variable accepts values between 5 and 10000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS6, esta variable acepta valores entre 5 y 10000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    tbd_ss6.accessType = endpointAccessType.readWriteCommand;
    var tbd_ss7 = endpoints.addEndpoint("TBD_SS7", { en: "SS7 Time Between Dumps", es: "Tiempo entre vaciados de SS7" }, endpointType.genericSensor);
    tbd_ss7.variableTypeId = 1647;
    tbd_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    tbd_ss7.operationWarningMessage = { "en": "You are about to change the value of SS7 Time Between Dumps, this variable accepts values between 5 and 10000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS7, esta variable acepta valores entre 5 y 10000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    tbd_ss7.accessType = endpointAccessType.readWriteCommand;
    var tbd_ss8 = endpoints.addEndpoint("TBD_SS8", { en: "SS8 Time Between Dumps", es: "Tiempo entre vaciados de SS8" }, endpointType.genericSensor);
    tbd_ss8.variableTypeId = 1647;
    tbd_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    tbd_ss8.operationWarningMessage = { "en": "You are about to change the value of SS8 Time Between Dumps, this variable accepts values between 5 and 10000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Tiempo entre vaciados de SS8, esta variable acepta valores entre 5 y 10000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    tbd_ss8.accessType = endpointAccessType.readWriteCommand;
    var dpt3pt2_ss5 = endpoints.addEndpoint("DPT3PT2_SS5", { en: "SS5 - Differential PT3-PT2", es: "SS5 - Diferencial PT3-PT2" }, endpointType.pressureSensor);
    dpt3pt2_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt3pt2_ss5.operationWarningMessage = { "en": "You are about to change the value of SS5 - Differential PT3-PT2, this variable accepts values between 5 and 5000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS5 - Diferencial PT3-PT2, esta variable acepta valores entre 5 y 5000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt3pt2_ss5.accessType = endpointAccessType.readWriteCommand;
    var dpt3pt2_ss6 = endpoints.addEndpoint("DPT3PT2_SS6", { en: "SS6 - Differential PT3-PT2", es: "SS6 - Diferencial PT3-PT2" }, endpointType.pressureSensor);
    dpt3pt2_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt3pt2_ss6.operationWarningMessage = { "en": "You are about to change the value of SS6 - Differential PT3-PT2, this variable accepts values between 5 and 5000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS6 - Diferencial PT3-PT2, esta variable acepta valores entre 5 y 5000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt3pt2_ss6.accessType = endpointAccessType.readWriteCommand;
    var dpt3pt2_ss7 = endpoints.addEndpoint("DPT3PT2_SS7", { en: "SS7 - Differential PT3-PT2", es: "SS7 - Diferencial PT3-PT2" }, endpointType.pressureSensor);
    dpt3pt2_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt3pt2_ss7.operationWarningMessage = { "en": "You are about to change the value of SS7 - Differential PT3-PT2, this variable accepts values between 5 and 5000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS7 - Diferencial PT3-PT2, esta variable acepta valores entre 5 y 5000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt3pt2_ss7.accessType = endpointAccessType.readWriteCommand;
    var dpt3pt2_ss8 = endpoints.addEndpoint("DPT3PT2_SS8", { en: "SS8 - Differential PT3-PT2", es: "SS8 - Diferencial PT3-PT2" }, endpointType.pressureSensor);
    dpt3pt2_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt3pt2_ss8.operationWarningMessage = { "en": "You are about to change the value of SS8 - Differential PT3-PT2, this variable accepts values between 5 and 5000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS8 - Diferencial PT3-PT2, esta variable acepta valores entre 5 y 5000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt3pt2_ss8.accessType = endpointAccessType.readWriteCommand;
    var h_hipt3_ss5 = endpoints.addEndpoint("H_HIPT3_SS5", { en: "SS5 - High high PT3", es: "SS5 - PT3 Alto alto" }, endpointType.pressureSensor);
    h_hipt3_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    h_hipt3_ss5.operationWarningMessage = { "en": "You are about to change the value of SS5 - High high PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS5 - PT3 Alto alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    h_hipt3_ss5.accessType = endpointAccessType.readWriteCommand;
    var h_hipt3_ss6 = endpoints.addEndpoint("H_HIPT3_SS6", { en: "SS6 - High high PT3", es: "SS6 - PT3 Alto alto" }, endpointType.pressureSensor);
    h_hipt3_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    h_hipt3_ss6.operationWarningMessage = { "en": "You are about to change the value of SS6 - High high PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS6 - PT3 Alto alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    h_hipt3_ss6.accessType = endpointAccessType.readWriteCommand;
    var h_hipt3_ss7 = endpoints.addEndpoint("H_HIPT3_SS7", { en: "SS7 - High high PT3", es: "SS7 - PT3 Alto alto" }, endpointType.pressureSensor);
    h_hipt3_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    h_hipt3_ss7.operationWarningMessage = { "en": "You are about to change the value of SS7 - High high PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS7 - PT3 Alto alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    h_hipt3_ss7.accessType = endpointAccessType.readWriteCommand;
    var h_hipt3_ss8 = endpoints.addEndpoint("H_HIPT3_SS8", { en: "SS8 - High high PT3", es: "SS8 - PT3 Alto alto" }, endpointType.pressureSensor);
    h_hipt3_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    h_hipt3_ss8.operationWarningMessage = { "en": "You are about to change the value of SS8 - High high PT3, this variable accepts values between 5 and 15000. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS8 - PT3 Alto alto, esta variable acepta valores entre 5 y 15000. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    h_hipt3_ss8.accessType = endpointAccessType.readWriteCommand;
    var dhp_ss5 = endpoints.addEndpoint("DHP_SS5", { en: "SS5 - Dump Holding Period", es: "Período de retención de vaciado de SS5" }, endpointType.genericSensor);
    dhp_ss5.variableTypeId = 1648;
    dhp_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dhp_ss5.operationWarningMessage = { "en": "You are about to change the value of SS5 - Dump Holding Period, this variable accepts values between 1 and 60. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Período de retención de vaciado de SS5, esta variable acepta valores entre 1 y 60. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dhp_ss5.accessType = endpointAccessType.readWriteCommand;
    var dhp_ss6 = endpoints.addEndpoint("DHP_SS6", { en: "SS6 - Dump Holding Period", es: "Período de retención de vaciado de SS6" }, endpointType.genericSensor);
    dhp_ss6.variableTypeId = 1648;
    dhp_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dhp_ss6.operationWarningMessage = { "en": "You are about to change the value of SS6 - Dump Holding Period, this variable accepts values between 1 and 60. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Período de retención de vaciado de SS6, esta variable acepta valores entre 1 y 60. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dhp_ss6.accessType = endpointAccessType.readWriteCommand;
    var dhp_ss7 = endpoints.addEndpoint("DHP_SS7", { en: "SS7 - Dump Holding Period", es: "Período de retención de vaciado de SS7" }, endpointType.genericSensor);
    dhp_ss7.variableTypeId = 1648;
    dhp_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dhp_ss7.operationWarningMessage = { "en": "You are about to change the value of SS7 - Dump Holding Period, this variable accepts values between 1 and 60. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Período de retención de vaciado de SS7, esta variable acepta valores entre 1 y 60. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dhp_ss7.accessType = endpointAccessType.readWriteCommand;
    var dhp_ss8 = endpoints.addEndpoint("DHP_SS8", { en: "SS8 - Dump Holding Period", es: "Período de retención de vaciado de SS8" }, endpointType.genericSensor);
    dhp_ss8.variableTypeId = 1648;
    dhp_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dhp_ss8.operationWarningMessage = { "en": "You are about to change the value of SS8 - Dump Holding Period, this variable accepts values between 1 and 60. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de Período de retención de vaciado de SS8, esta variable acepta valores entre 1 y 60. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dhp_ss8.accessType = endpointAccessType.readWriteCommand;
    var dpt1_ss5 = endpoints.addEndpoint("DPT1_SS5", { en: "SS5 - Delta PT1 to end dump", es: "SS5 - Delta PT1 para terminar vaciado" }, endpointType.genericSensor);
    dpt1_ss5.variableTypeId = 1643;
    dpt1_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt1_ss5.operationWarningMessage = { "en": "You are about to change the value of SS5 - Delta PT1 to end dump, this variable accepts values between 0 and 100. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS5 - Delta PT1 para terminar vaciado, esta variable acepta valores entre 0 y 100. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt1_ss5.accessType = endpointAccessType.readWriteCommand;
    var dpt1_ss6 = endpoints.addEndpoint("DPT1_SS6", { en: "SS6 - Delta PT1 to end dump", es: "SS6 - Delta PT1 para terminar vaciado" }, endpointType.genericSensor);
    dpt1_ss6.variableTypeId = 1643;
    dpt1_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt1_ss6.operationWarningMessage = { "en": "You are about to change the value of SS6 - Delta PT1 to end dump, this variable accepts values between 0 and 100. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS6 - Delta PT1 para terminar vaciado, esta variable acepta valores entre 0 y 100. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt1_ss6.accessType = endpointAccessType.readWriteCommand;
    var dpt1_ss7 = endpoints.addEndpoint("DPT1_SS7", { en: "SS7 - Delta PT1 to end dump", es: "SS7 - Delta PT1 para terminar vaciado" }, endpointType.genericSensor);
    dpt1_ss7.variableTypeId = 1643;
    dpt1_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt1_ss7.operationWarningMessage = { "en": "You are about to change the value of SS7 - Delta PT1 to end dump, this variable accepts values between 0 and 100. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS7 - Delta PT1 para terminar vaciado, esta variable acepta valores entre 0 y 100. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt1_ss7.accessType = endpointAccessType.readWriteCommand;
    var dpt1_ss8 = endpoints.addEndpoint("DPT1_SS8", { en: "SS8 - Delta PT1 to end dump", es: "SS8 - Delta PT1 para terminar vaciado" }, endpointType.genericSensor);
    dpt1_ss8.variableTypeId = 1643;
    dpt1_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    dpt1_ss8.operationWarningMessage = { "en": "You are about to change the value of SS8 - Delta PT1 to end dump, this variable accepts values between 0 and 100. This change will take a few seconds to be reflected in the platform.", "es": "Está por cambiar el valor de SS8 - Delta PT1 para terminar vaciado, esta variable acepta valores entre 0 y 100. Este cambio tardará unos segundos para verse reflejado en la plataforma." };
    dpt1_ss8.accessType = endpointAccessType.readWriteCommand;
    var ttd_ss5 = endpoints.addEndpoint("TTD_SS5", { en: "SS5 - Time to drain", es: "Tiempo para drenar SS5" }, endpointType.genericSensor);
    ttd_ss5.variableTypeId = 1648;
    ttd_ss5.operationSecurityLevel = endpointOperationSecurityLevel.high;
    ttd_ss5.operationWarningMessage = { "en": "You are about to change the value of SS5 - Time to drain", "es": "Está por cambiar el valor de Tiempo para drenar SS5" };
    ttd_ss5.accessType = endpointAccessType.readWriteCommand;
    var ttd_ss6 = endpoints.addEndpoint("TTD_SS6", { en: "SS6 - Time to drain", es: "Tiempo para drenar SS6" }, endpointType.genericSensor);
    ttd_ss6.variableTypeId = 1648;
    ttd_ss6.operationSecurityLevel = endpointOperationSecurityLevel.high;
    ttd_ss6.operationWarningMessage = { "en": "You are about to change the value of SS6 - Time to drain", "es": "Está por cambiar el valor de Tiempo para drenar SS6" };
    ttd_ss6.accessType = endpointAccessType.readWriteCommand;
    var ttd_ss7 = endpoints.addEndpoint("TTD_SS7", { en: "SS7 - Time to drain", es: "Tiempo para drenar SS7" }, endpointType.genericSensor);
    ttd_ss7.variableTypeId = 1648;
    ttd_ss7.operationSecurityLevel = endpointOperationSecurityLevel.high;
    ttd_ss7.operationWarningMessage = { "en": "You are about to change the value of SS7 - Time to drain", "es": "Está por cambiar el valor de Tiempo para drenar SS7" };
    ttd_ss7.accessType = endpointAccessType.readWriteCommand;
    var ttd_ss8 = endpoints.addEndpoint("TTD_SS8", { en: "SS8 - Time to drain", es: "Tiempo para drenar SS8" }, endpointType.genericSensor);
    ttd_ss8.variableTypeId = 1648;
    ttd_ss8.operationSecurityLevel = endpointOperationSecurityLevel.high;
    ttd_ss8.operationWarningMessage = { "en": "You are about to change the value of SS8 - Time to drain", "es": "Está por cambiar el valor de Tiempo para drenar SS8" };
    ttd_ss8.accessType = endpointAccessType.readWriteCommand;
    var e_status_alarmas = endpoints.addEndpoint("STATUS_ALARMAS", { en: "Status", es: "Status" }, endpointType.genericSensor);
    e_status_alarmas.variableTypeId = 1645;
    var vc_dump = endpoints.addEndpoint("VC_DUMP", { en: "Dumps", es: "Dumps" }, endpointType.genericSensor);
    vc_dump.variableTypeId = 1636;
    var vc_dump_ss1 = endpoints.addEndpoint("VC_DUMP_SS1", { en: "Dumps SS1", es: "Dumps SS1" }, endpointType.genericSensor);
    vc_dump_ss1.variableTypeId = 1636;
    var vc_dump_ss2 = endpoints.addEndpoint("VC_DUMP_SS2", { en: "Dumps SS2", es: "Dumps SS2" }, endpointType.genericSensor);
    vc_dump_ss2.variableTypeId = 1636;
    var vc_dump_ss3 = endpoints.addEndpoint("VC_DUMP_SS3", { en: "Dumps SS3", es: "Dumps SS3" }, endpointType.genericSensor);
    vc_dump_ss3.variableTypeId = 1636;
    var vc_dump_ss4 = endpoints.addEndpoint("VC_DUMP_SS4", { en: "Dumps SS4", es: "Dumps SS4" }, endpointType.genericSensor);
    vc_dump_ss4.variableTypeId = 1636;
    var vc_dump_ss5 = endpoints.addEndpoint("VC_DUMP_SS5", { en: "Dumps SS5", es: "Dumps SS5" }, endpointType.genericSensor);
    vc_dump_ss5.variableTypeId = 1636;
    var vc_dump_ss6 = endpoints.addEndpoint("VC_DUMP_SS6", { en: "Dumps SS6", es: "Dumps SS6" }, endpointType.genericSensor);
    vc_dump_ss6.variableTypeId = 1636;
    var vc_dump_ss7 = endpoints.addEndpoint("VC_DUMP_SS7", { en: "Dumps SS7", es: "Dumps SS7" }, endpointType.genericSensor);
    vc_dump_ss7.variableTypeId = 1636;
    var vc_dump_ss8 = endpoints.addEndpoint("VC_DUMP_SS8", { en: "Dumps SS8", es: "Dumps SS8" }, endpointType.genericSensor);
    vc_dump_ss8.variableTypeId = 1636;
    var his_dw_ss1 = endpoints.addEndpoint("HIS_DW_SS1", { en: "SS1 drained weight history", es: "Historico de peso drenado SS1" }, endpointType.genericSensor);
    his_dw_ss1.variableTypeId = 1650;
    var his_dw_ss2 = endpoints.addEndpoint("HIS_DW_SS2", { en: "SS2 drained weight history", es: "Historico de peso drenado SS2" }, endpointType.genericSensor);
    his_dw_ss2.variableTypeId = 1650;
    var his_dw_ss3 = endpoints.addEndpoint("HIS_DW_SS3", { en: "SS3 drained weight history", es: "Historico de peso drenado SS3" }, endpointType.genericSensor);
    his_dw_ss3.variableTypeId = 1650;
    var his_dw_ss4 = endpoints.addEndpoint("HIS_DW_SS4", { en: "SS4 drained weight history", es: "Historico de peso drenado SS4" }, endpointType.genericSensor);
    his_dw_ss4.variableTypeId = 1650;
    var his_dw_ss5 = endpoints.addEndpoint("HIS_DW_SS5", { en: "SS5 drained weight history", es: "Historico de peso drenado SS5" }, endpointType.genericSensor);
    his_dw_ss5.variableTypeId = 1650;
    var his_dw_ss6 = endpoints.addEndpoint("HIS_DW_SS6", { en: "SS6 drained weight history", es: "Historico de peso drenado SS6" }, endpointType.genericSensor);
    his_dw_ss6.variableTypeId = 1650;
    var his_dw_ss7 = endpoints.addEndpoint("HIS_DW_SS7", { en: "SS7 drained weight history", es: "Historico de peso drenado SS7" }, endpointType.genericSensor);
    his_dw_ss7.variableTypeId = 1650;
    var his_dw_ss8 = endpoints.addEndpoint("HIS_DW_SS8", { en: "SS8 drained weight history", es: "Historico de peso drenado SS8" }, endpointType.genericSensor);
    his_dw_ss8.variableTypeId = 1650;
    var tank_level = endpoints.addEndpoint("TANK_LEVEL", { en: "Tank level", es: "" }, endpointType.genericSensor);
    tank_level.variableTypeId = 1643;
    tank_level.operationSecurityLevel = endpointOperationSecurityLevel.high;
    tank_level.operationWarningMessage = { "en": "Security check!", "es": "Validación de seguridad!" };
    tank_level.accessType = endpointAccessType.readWriteCommand;
    var e_485_health = endpoints.addEndpoint("485_HEALTH", { en: "Bus RS485 Health", es: "" }, endpointType.genericSensor);
    e_485_health.variableTypeId = 1643;
    var e_485_status = endpoints.addEndpoint("485_STATUS", { en: "Bus RS485 Status", es: "" }, endpointType.genericSensor);
    e_485_status.variableTypeId = 1632;
    var e_485_e_cur_hr = endpoints.addEndpoint("485_E_CUR_HR", { en: "RS485 Errors Current Hour", es: "" }, endpointType.genericSensor);
    e_485_e_cur_hr.variableTypeId = 1644;
    var e_485_ce_cur_hr = endpoints.addEndpoint("485_CE_CUR_HR", { en: "RS485 Consecutive Errors Current Hour", es: "" }, endpointType.genericSensor);
    e_485_ce_cur_hr.variableTypeId = 1644;
    var e_485_e_pre_hr = endpoints.addEndpoint("485_E_PRE_HR", { en: "RS485 Errors Previous Hour", es: "" }, endpointType.genericSensor);
    e_485_e_pre_hr.variableTypeId = 1644;
    var e_485_ce_pre_hr = endpoints.addEndpoint("485_CE_PRE_HR", { en: "RS485 Consecutive Errors Previous Hour", es: "" }, endpointType.genericSensor);
    e_485_ce_pre_hr.variableTypeId = 1644;
    var e_485_e_day = endpoints.addEndpoint("485_E_DAY", { en: "Daily RS485 Errors", es: "" }, endpointType.genericSensor);
    e_485_e_day.variableTypeId = 1644;
    var e_485_ce_day = endpoints.addEndpoint("485_CE_DAY", { en: "Daily RS485 Consecutive Errors", es: "" }, endpointType.genericSensor);
    e_485_ce_day.variableTypeId = 1644;
    var vc_op_his_dw_ss1 = endpoints.addEndpoint("VC_OP_HIS_DW_SS1", { en: "SS1 Job Weight", es: "Historico de peso drenado SS1 (op)" }, endpointType.genericSensor);
    vc_op_his_dw_ss1.variableTypeId = 1650;
    var vc_op_his_dw_ss2 = endpoints.addEndpoint("VC_OP_HIS_DW_SS2", { en: "SS2 Job Weight", es: "Historico de peso drenado SS2 (op)" }, endpointType.genericSensor);
    vc_op_his_dw_ss2.variableTypeId = 1650;
    var vc_op_his_dw_ss3 = endpoints.addEndpoint("VC_OP_HIS_DW_SS3", { en: "SS3 Job Weight", es: "Historico de peso drenado SS3 (op)" }, endpointType.genericSensor);
    vc_op_his_dw_ss3.variableTypeId = 1650;
    var vc_op_his_dw_ss4 = endpoints.addEndpoint("VC_OP_HIS_DW_SS4", { en: "SS4 Job Weight", es: "Historico de peso drenado SS4 (op)" }, endpointType.genericSensor);
    vc_op_his_dw_ss4.variableTypeId = 1650;
    var vc_op_his_dw_ss5 = endpoints.addEndpoint("VC_OP_HIS_DW_SS5", { en: "SS5 Job Weight", es: "Historico de peso drenado SS5 (op)" }, endpointType.genericSensor);
    vc_op_his_dw_ss5.variableTypeId = 1650;
    var vc_op_his_dw_ss6 = endpoints.addEndpoint("VC_OP_HIS_DW_SS6", { en: "SS6 Job Weight", es: "Historico de peso drenado SS6 (op)" }, endpointType.genericSensor);
    vc_op_his_dw_ss6.variableTypeId = 1650;
    var vc_op_his_dw_ss7 = endpoints.addEndpoint("VC_OP_HIS_DW_SS7", { en: "SS7 Job Weight", es: "Historico de peso drenado SS7 (op)" }, endpointType.genericSensor);
    vc_op_his_dw_ss7.variableTypeId = 1650;
    var vc_op_his_dw_ss8 = endpoints.addEndpoint("VC_OP_HIS_DW_SS8", { en: "SS8 Job Weight", es: "Historico de peso drenado SS8 (op)" }, endpointType.genericSensor);
    vc_op_his_dw_ss8.variableTypeId = 1650;
    var vc_dw_history_op = endpoints.addEndpoint("VC_DW_HISTORY_OP", { en: "Job Weight", es: "Job Weight" }, endpointType.genericSensor);
    vc_dw_history_op.variableTypeId = 1650;
    var vc_dump_op = endpoints.addEndpoint("VC_DUMP_OP", { en: "Dumps OP", es: "Dumps OP" }, endpointType.genericSensor);
    vc_dump_op.variableTypeId = 1636;
    var vc_dump_op_acum = endpoints.addEndpoint("VC_DUMP_OP_ACUM", { en: "Dumps OP Acum", es: "Dumps OP Acum" }, endpointType.genericSensor);
    vc_dump_op_acum.variableTypeId = 1636;
    var vc_op_days = endpoints.addEndpoint("VC_OP_DAYS", { en: "Operation Days", es: "Operation Days" }, endpointType.genericSensor);
    vc_op_days.variableTypeId = 1644;
    var vc_dump_op_ss1 = endpoints.addEndpoint("VC_DUMP_OP_SS1", { en: "Job Dumps SS1", es: "Job Dumps SS1" }, endpointType.genericSensor);
    vc_dump_op_ss1.variableTypeId = 1636;
    var vc_dump_op_ss2 = endpoints.addEndpoint("VC_DUMP_OP_SS2", { en: "Job Dumps SS2", es: "Job Dumps SS2" }, endpointType.genericSensor);
    vc_dump_op_ss2.variableTypeId = 1636;
    var vc_dump_op_ss3 = endpoints.addEndpoint("VC_DUMP_OP_SS3", { en: "Job Dumps SS3", es: "Job Dumps SS3" }, endpointType.genericSensor);
    vc_dump_op_ss3.variableTypeId = 1636;
    var vc_dump_op_ss4 = endpoints.addEndpoint("VC_DUMP_OP_SS4", { en: "Job Dumps SS4", es: "Job Dumps SS4" }, endpointType.genericSensor);
    vc_dump_op_ss4.variableTypeId = 1636;
    var vc_dump_op_ss5 = endpoints.addEndpoint("VC_DUMP_OP_SS5", { en: "Job Dumps SS5", es: "Job Dumps SS5" }, endpointType.genericSensor);
    vc_dump_op_ss5.variableTypeId = 1636;
    var vc_dump_op_ss6 = endpoints.addEndpoint("VC_DUMP_OP_SS6", { en: "Job Dumps SS6", es: "Job Dumps SS6" }, endpointType.genericSensor);
    vc_dump_op_ss6.variableTypeId = 1636;
    var vc_dump_op_ss7 = endpoints.addEndpoint("VC_DUMP_OP_SS7", { en: "Job Dumps SS7", es: "Job Dumps SS7" }, endpointType.genericSensor);
    vc_dump_op_ss7.variableTypeId = 1636;
    var vc_dump_op_ss8 = endpoints.addEndpoint("VC_DUMP_OP_SS8", { en: "Job Dumps SS8", es: "Job Dumps SS8" }, endpointType.genericSensor);
    vc_dump_op_ss8.variableTypeId = 1636;
    var vc_yd_dw_ss1 = endpoints.addEndpoint("VC_YD_DW_SS1", { en: "SS1 - Yesterday Drained Weight", es: "SS1 - Yesterday Drained Weight" }, endpointType.genericSensor);
    vc_yd_dw_ss1.variableTypeId = 1650;
    var vc_yd_dw_ss2 = endpoints.addEndpoint("VC_YD_DW_SS2", { en: "SS2 - Yesterday Drained Weight", es: "SS2 - Yesterday Drained Weight" }, endpointType.genericSensor);
    vc_yd_dw_ss2.variableTypeId = 1650;
    var vc_yd_dw_ss3 = endpoints.addEndpoint("VC_YD_DW_SS3", { en: "SS3 - Yesterday Drained Weight", es: "SS3 - Yesterday Drained Weight" }, endpointType.genericSensor);
    vc_yd_dw_ss3.variableTypeId = 1650;
    var vc_yd_dw_ss4 = endpoints.addEndpoint("VC_YD_DW_SS4", { en: "SS4 - Yesterday Drained Weight", es: "SS4 - Yesterday Drained Weight" }, endpointType.genericSensor);
    vc_yd_dw_ss4.variableTypeId = 1650;
    var vc_yd_dw_ss5 = endpoints.addEndpoint("VC_YD_DW_SS5", { en: "SS5 - Yesterday Drained Weight", es: "SS5 - Yesterday Drained Weight" }, endpointType.genericSensor);
    vc_yd_dw_ss5.variableTypeId = 1650;
    var vc_yd_dw_ss6 = endpoints.addEndpoint("VC_YD_DW_SS6", { en: "SS6 - Yesterday Drained Weight", es: "SS6 - Yesterday Drained Weight" }, endpointType.genericSensor);
    vc_yd_dw_ss6.variableTypeId = 1650;
    var vc_yd_dw_ss7 = endpoints.addEndpoint("VC_YD_DW_SS7", { en: "SS7 - Yesterday Drained Weight", es: "SS7 - Yesterday Drained Weight" }, endpointType.genericSensor);
    vc_yd_dw_ss7.variableTypeId = 1650;
    var vc_yd_dw_ss8 = endpoints.addEndpoint("VC_YD_DW_SS8", { en: "SS8 - Yesterday Drained Weight", es: "SS8 - Yesterday Drained Weight" }, endpointType.genericSensor);
    vc_yd_dw_ss8.variableTypeId = 1650;
    var vc_total_dw_op = endpoints.addEndpoint("VC_TOTAL_DW_OP", { en: "Job Drained Weight", es: "Job Drained Weight" }, endpointType.genericSensor);
    vc_total_dw_op.variableTypeId = 1650;
    var pt1_1st = endpoints.addEndpoint("PT1_1ST", { en: "PT1 1ST SAMPLE TIME", es: "PT1 1ST SAMPLE TIME" }, endpointType.genericSensor);
    pt1_1st.variableTypeId = 1644;
    var pt1_lft = endpoints.addEndpoint("PT1_LFT", { en: "PT1 LOW FOR TEST", es: "PT1 LOW FOR TEST" }, endpointType.genericSensor);
    pt1_lft.variableTypeId = 1644;
    var ts_ss1 = endpoints.addEndpoint("TS_SS1", { en: "SS1 -Time Saved", es: "SS1 -Tiempo ahorrado" }, endpointType.genericSensor);
    ts_ss1.variableTypeId = 1648;
    var ts_ss2 = endpoints.addEndpoint("TS_SS2", { en: "SS1 -Time Saved", es: "SS1 -Tiempo ahorrado" }, endpointType.genericSensor);
    ts_ss2.variableTypeId = 1648;
    var ts_ss3 = endpoints.addEndpoint("TS_SS3", { en: "SS1 -Time Saved", es: "SS1 -Tiempo ahorrado" }, endpointType.genericSensor);
    ts_ss3.variableTypeId = 1648;
    var ts_ss4 = endpoints.addEndpoint("TS_SS4", { en: "SS1 -Time Saved", es: "SS1 -Tiempo ahorrado" }, endpointType.genericSensor);
    ts_ss4.variableTypeId = 1648;
    var ts_ss5 = endpoints.addEndpoint("TS_SS5", { en: "SS1 -Time Saved", es: "SS1 -Tiempo ahorrado" }, endpointType.genericSensor);
    ts_ss5.variableTypeId = 1648;
    var ts_ss6 = endpoints.addEndpoint("TS_SS6", { en: "SS1 -Time Saved", es: "SS1 -Tiempo ahorrado" }, endpointType.genericSensor);
    ts_ss6.variableTypeId = 1648;
    var ts_ss7 = endpoints.addEndpoint("TS_SS7", { en: "SS1 -Time Saved", es: "SS1 -Tiempo ahorrado" }, endpointType.genericSensor);
    ts_ss7.variableTypeId = 1648;
    var ts_ss8 = endpoints.addEndpoint("TS_SS8", { en: "SS1 -Time Saved", es: "SS1 -Tiempo ahorrado" }, endpointType.genericSensor);
    ts_ss8.variableTypeId = 1648;
    var rig_mode = endpoints.addEndpoint("RIG_MODE", { en: "Rig mode", es: "Modo del equipo" }, endpointType.genericSensor);
    rig_mode.variableTypeId = 1652;
    var acl1 = endpoints.addEndpoint("ACL1", { en: "AC Consumption L1", es: "AC Consumption L1" }, endpointType.genericSensor);
    acl1.variableTypeId = 1654;
    var acl2 = endpoints.addEndpoint("ACL2", { en: "AC Consumption L2", es: "AC Consumption L2" }, endpointType.genericSensor);
    acl2.variableTypeId = 1654;
    var acl3 = endpoints.addEndpoint("ACL3", { en: "AC Consumption L3", es: "AC Consumption L3" }, endpointType.genericSensor);
    acl3.variableTypeId = 1654;
    var state = endpoints.addEndpoint("STATE", { en: "Battery State of Charge (System)", es: "Battery State of Charge (System)" }, endpointType.genericSensor);
    state.variableTypeId = 1643;
    var pv_charger = endpoints.addEndpoint("PV_CHARGER", { en: "PV - DC-coupled power", es: "PV - DC-coupled power" }, endpointType.genericSensor);
    pv_charger.variableTypeId = 1654;
    var ac_input = endpoints.addEndpoint("AC_INPUT", { en: "VE.Bus charge power (System)", es: "VE.Bus charge power (System)" }, endpointType.genericSensor);
    ac_input.variableTypeId = 1653;

    //-------------------------------------------------------------------------------------------------------
    // Template de base para modificar y crear el resto.

    const templateOfTemplates = `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no" />
    <title></title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Roboto:wght@300&display=swap"
        rel="stylesheet" type="text/css" />
    <style type="text/css">
        /* Resets */
        .ReadMsgBody {
            width: 100%;
            background-color: #ebebeb;
        }

        .ExternalClass {
            width: 100%;
            background-color: #ebebeb;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        body {
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
        }

        body {
            margin: 0;
            padding: 0;
        }

        .yshortcuts a {
            border-bottom: none !important;
        }

        .rnb-del-min-width {
            min-width: 0 !important;
        }

        /* Add new outlook css start */
        .templateContainer {
            max-width: 590px !important;
            width: auto !important;
        }

        /* Add new outlook css end */
        /* Image width by default for 3 columns */
        img[class="rnb-col-3-img"] {
            max-width: 170px;
        }

        /* Image width by default for 2 columns */
        img[class="rnb-col-2-img"] {
            max-width: 264px;
        }

        /* Image width by default for 2 columns aside small size */
        img[class="rnb-col-2-img-side-xs"] {
            max-width: 180px;
        }

        /* Image width by default for 2 columns aside big size */
        img[class="rnb-col-2-img-side-xl"] {
            max-width: 350px;
        }

        /* Image width by default for 1 column */
        img[class="rnb-col-1-img"] {
            max-width: 550px;
        }

        /* Image width by default for header */
        img[class="rnb-header-img"] {
            max-width: 590px;
        }

        /* Ckeditor line-height spacing */
        .rnb-force-col p,
        ul,
        ol {
            margin: 0px !important;
        }

        .rnb-del-min-width p,
        ul,
        ol {
            margin: 0px !important;
        }

        /* tmpl-2 preview */
        .rnb-tmpl-width {
            width: 100% !important;
        }

        /* tmpl-11 preview */
        .rnb-social-width {
            padding-right: 15px !important;
        }

        /* tmpl-11 preview */
        .rnb-social-align {
            float: right !important;
        }

        /* Ul Li outlook extra spacing fix */
        li {
            mso-margin-top-alt: 0;
            mso-margin-bottom-alt: 0;
        }

        /* Outlook fix */
        table {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        /* Outlook fix */
        table,
        tr,
        td {
            border-collapse: collapse;
        }

        /* Outlook fix */
        p,
        a,
        li,
        blockquote {
            mso-line-height-rule: exactly;
        }

        /* Outlook fix */
        .msib-right-img {
            mso-padding-alt: 0 !important;
        }

        @media only screen and (min-width:590px) {

            /* mac fix width */
            .templateContainer {
                width: 590px !important;
            }
        }

        @media screen and (max-width: 360px) {

            /* yahoo app fix width "tmpl-2 tmpl-10 tmpl-13" in android devices */
            .rnb-yahoo-width {
                width: 360px !important;
            }
        }

        @media screen and (max-width: 380px) {

            /* fix width and font size "tmpl-4 tmpl-6" in mobile preview */
            .element-img-text {
                font-size: 24px !important;
            }

            .element-img-text2 {
                width: 230px !important;
            }

            .content-img-text-tmpl-6 {
                font-size: 24px !important;
            }

            .content-img-text2-tmpl-6 {
                width: 220px !important;
            }
        }

        @media screen and (max-width: 480px) {
            td[class="rnb-container-padding"] {
                padding-left: 10px !important;
                padding-right: 10px !important;
            }

            /* force container nav to (horizontal) blocks */
            td.rnb-force-nav {
                display: inherit;
            }

            /* fix text alignment "tmpl-11" in mobile preview */
            .rnb-social-text-left {
                width: 100%;
                text-align: center;
                margin-bottom: 15px;
            }

            .rnb-social-text-right {
                width: 100%;
                text-align: center;
            }
        }

        @media only screen and (max-width: 600px) {

            /* center the address &amp; social icons */
            .rnb-text-center {
                text-align: center !important;
            }

            /* force container columns to (horizontal) blocks */
            th.rnb-force-col {
                display: block;
                padding-right: 0 !important;
                padding-left: 0 !important;
                width: 100%;
            }

            table.rnb-container {
                width: 100% !important;
            }

            table.rnb-btn-col-content {
                width: 100% !important;
            }

            table.rnb-col-3 {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
                /* change left/right padding and margins to top/bottom ones */
                margin-bottom: 10px;
                padding-bottom: 10px;
                /*border-bottom: 1px solid #eee;*/
            }

            table.rnb-last-col-3 {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
            }

            table.rnb-col-2 {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
                /* change left/right padding and margins to top/bottom ones */
                margin-bottom: 10px;
                padding-bottom: 10px;
                /*border-bottom: 1px solid #eee;*/
            }

            table.rnb-col-2-noborder-onright {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
                /* change left/right padding and margins to top/bottom ones */
                margin-bottom: 10px;
                padding-bottom: 10px;
            }

            table.rnb-col-2-noborder-onleft {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
                /* change left/right padding and margins to top/bottom ones */
                margin-top: 10px;
                padding-top: 10px;
            }

            table.rnb-last-col-2 {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
            }

            table.rnb-col-1 {
                /* unset table align="left/right" */
                float: none !important;
                width: 100% !important;
            }

            img.rnb-col-3-img {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            img.rnb-col-2-img {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            img.rnb-col-2-img-side-xs {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            img.rnb-col-2-img-side-xl {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            img.rnb-col-1-img {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            img.rnb-header-img {
                /**max-width:none !important;**/
                width: 100% !important;
                margin: 0 auto;
            }

            img.rnb-logo-img {
                /**max-width:none !important;**/
                width: 100% !important;
            }

            td.rnb-mbl-float-none {
                float: inherit !important;
            }

            .img-block-center {
                text-align: center !important;
            }

            .logo-img-center {
                float: inherit !important;
            }

            /* tmpl-11 preview */
            .rnb-social-align {
                margin: 0 auto !important;
                float: inherit !important;
            }

            /* tmpl-11 preview */
            .rnb-social-center {
                display: inline-block;
            }

            /* tmpl-11 preview */
            .social-text-spacing {
                margin-bottom: 0px !important;
                padding-bottom: 0px !important;
            }

            /* tmpl-11 preview */
            .social-text-spacing2 {
                padding-top: 15px !important;
            }

            /* UL bullet fixed in outlook */
            ul {
                mso-special-format: bullet;
            }
        }

        @media screen {
            body {
                font-family: 'Lato', 'Arial', Helvetica, sans-serif;
            }
        }
    </style>
    <!--[if gte mso 11]><style type="text/css">table{border-spacing: 0; }table td {border-collapse: separate;}</style><![endif]-->
    <!--[if !mso]><!-->
    <style type="text/css">
        table {
            border-spacing: 0;
        }

        table td {
            border-collapse: collapse;
        }
    </style>
    <!--<![endif]-->
    <!--[if gte mso 15]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
    <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
</head>

<body>

    <table border="0" align="center" width="100%" cellpadding="0" cellspacing="0" class="main-template"
        bgcolor="#f9fafc" style="background-color: rgb(249, 250, 252);">

        <tbody>
            <tr>
                <td align="center" valign="top">
                    <!--[if gte mso 9]>
                            <table align="center" border="0" cellspacing="0" cellpadding="0" width="590" style="width:590px;">
                            <tr>
                            <td align="center" valign="top" width="590" style="width:590px;">
                            <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="590" class="templateContainer"
                        style="max-width:590px!important; width: 590px;">
                        <tbody>
                            <tr>

                                <td align="center" valign="top">

                                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                        cellspacing="0" style="min-width:590px;" name="Layout_0" id="Layout_0">
                                        <tbody>
                                            <tr>
                                                <td class="rnb-del-min-width" valign="top" align="center"
                                                    style="min-width:590px;">
                                                    <a href="#" name="Layout_0"></a>
                                                    <table width="100%" cellpadding="0" border="0" height="38"
                                                        cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top" height="38">
                                                                    <img width="20" height="38"
                                                                        style="display:block; max-height:38px; max-width:20px;"
                                                                        alt=""
                                                                        src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255);">

                                        <!--[if mso]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->

                                        <!--[if mso]>
                    <td valign="top" width="590" style="width:590px;">
                    <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0"
                                            style="min-width:100%; -webkit-backface-visibility: hidden; line-height: 10px;"
                                            name="Layout_42" id="Layout_42">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" valign="top" align="center"
                                                        style="min-width: 590px;">
                                                        <a href="https://www.msuitecloud.com/gear/monitor/map"
                                                            target="_blank" name="Layout_42">
                                                            <table width="100%" class="rnb-container" cellpadding="0"
                                                                border="0" bgcolor="#ffffff" align="center"
                                                                cellspacing="0"
                                                                style="background-color: rgb(255, 255, 255);">
                                                                <tbody>
                                                                    <tr>
                                                                        <td valign="top" align="center">
                                                                            <table cellspacing="0" cellpadding="0"
                                                                                border="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                style="border-radius:5px; width:590;;max-width:590px !important;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;border-collapse: separate;border-radius: 5px;">
                                                                                                <div><img
                                                                                                        ng-if="col.img.source != 'url'"
                                                                                                        border="0"
                                                                                                        hspace="0"
                                                                                                        vspace="0"
                                                                                                        width="590"
                                                                                                        class="rnb-header-img"
                                                                                                        alt=""
                                                                                                        style="display:block; float:left; border-radius: 5px; "
                                                                                                        src="https://img.mailinblue.com/3103319/images/rnb/original/620ff6c701cea0233a014993.png">
                                                                                                </div>
                                                                                                <div
                                                                                                    style="clear:both;">
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>

                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                    </td>
                    <![endif]-->

                                        <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                        cellspacing="0" style="min-width:590px;" name="Layout_3056" id="Layout_3056">
                                        <tbody>
                                            <tr>
                                                <td class="rnb-del-min-width" valign="top" align="center"
                                                    style="min-width:590px;">
                                                    <a href="#" name="Layout_3056"></a>
                                                    <table width="100%" cellpadding="0" border="0" height="12"
                                                        cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top" height="12">
                                                                    <img width="20" height="12"
                                                                        style="display:block; max-height:12px; max-width:20px;"
                                                                        alt=""
                                                                        src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255);">

                                        <!--[if mso]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->

                                        <!--[if mso]>
                    <td valign="top" width="590" style="width:590px;">
                    <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0"
                                            style="min-width:100%; -webkit-backface-visibility: hidden; line-height: 10px;"
                                            name="Layout_57" id="Layout_57">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" valign="top" align="center"
                                                        style="min-width: 590px;">
                                                        <a href="#" name="Layout_57"></a>
                                                        <table width="100%" class="rnb-container" cellpadding="0"
                                                            border="0" bgcolor="#ffffff" align="center" cellspacing="0"
                                                            style="background-color: rgb(255, 255, 255);">
                                                            <tbody>
                                                                <tr>
                                                                    <td valign="top" align="center">
                                                                        <table cellspacing="0" cellpadding="0"
                                                                            border="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <div
                                                                                            style="border-radius:5px; width:590;;max-width:590px !important;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;border-collapse: separate;border-radius: 0px;margin-bottom: 5%; ">
                                                                                            <div><img
                                                                                                    ng-if="col.img.source != 'url'"
                                                                                                    border="0"
                                                                                                    hspace="0"
                                                                                                    vspace="0"
                                                                                                    width="590"
                                                                                                    class="rnb-header-img"
                                                                                                    alt=""
                                                                                                    style="display:block; float:left; border-radius: 5px; "
                                                                                                    src="https://www.msuitecloud.com/filedata/notificationtemplates/assets/images/{{IMAGE_PNG}}">
                                                                                            </div>
                                                                                            <div style="clear:both;">
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                    </td>
                    <![endif]-->

                                        <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">

                                        <!--[if mso]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->

                                        <!--[if mso]>
                    <td valign="top" width="590" style="width:590px;">
                    <![endif]-->

                                        <table width="100%" cellpadding="0" border="0" cellspacing="0" name="Layout_61"
                                            id="Layout_61">
                                            <tbody>
                                                <tr>
                                                    <td align="center" valign="top"><a href="#" name="Layout_61"></a>
                                                        <table border="0" width="100%" cellpadding="0" cellspacing="0"
                                                            class="rnb-container" bgcolor="#ffffff"
                                                            style="height: 0px; background-color: rgb(255, 255, 255); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="rnb-container-padding"
                                                                        style="font-size: px;font-family: ; color: ;">

                                                                        <table border="0" cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="rnb-columns-container" align="center"
                                                                            style="margin:auto;">
                                                                            <tbody>
                                                                                <tr>

                                                                                    <th class="rnb-force-col"
                                                                                        align="center"
                                                                                        style="text-align: center; font-weight: normal">

                                                                                        <table border="0"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0"
                                                                                            align="center"
                                                                                            class="rnb-col-1">

                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td height="10">
                                                                                                    </td>
                                                                                                </tr>

                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:center;">

                                                                                                        <span
                                                                                                            style="color:#3c4858;"><span
                                                                                                                style="color:#47525E;"><strong><span
                                                                                                                        style="font-size:24px;">{{NEW_CLOSED}}
                                                                                                                        {{ALARM_ALERT}}</span></strong></span></span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td height="10">
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </th>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>

                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                    </td>
                    <![endif]-->

                                        <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">

                                        <!--[if mso]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->

                                        <!--[if mso]>
                    <td valign="top" width="590" style="width:590px;">
                    <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0" style="min-width:100%;" name="Layout_54">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" align="center" valign="top">
                                                        <a href="#" name="Layout_54"></a>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                            class="rnb-container" bgcolor="#ffffff"
                                                            style="background-color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);">

                                                            <tbody>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" class="rnb-container-padding"
                                                                        align="left">

                                                                        <table width="100%" border="0" cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="rnb-columns-container">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th class="rnb-force-col"
                                                                                        style="text-align: left; font-weight: normal; padding-right: 0px;"
                                                                                        valign="top">

                                                                                        <table border="0" valign="top"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0" width="100%"
                                                                                            align="left"
                                                                                            class="rnb-col-1">

                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                style="text-align: center;">
                                                                                                                <span
                                                                                                                    style="color:#47525E;"><span
                                                                                                                        style="font-size:16px;"><span
                                                                                                                            style="background-color: transparent;">{{TEXT_ABOUT}}
                                                                                                                            {DEVICE_NAME}</span></span></span>
                                                                                                            </div>

                                                                                                            <div>&nbsp;
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>

                                                                                    </th>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                    </td>
                    <![endif]-->

                                        <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">

                                        <!--[if mso]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->

                                        <!--[if mso]>
                    <td valign="top" width="590" style="width:590px;">
                    <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0" style="min-width:100%;" name="Layout_60">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" align="center" valign="top">
                                                        <a href="#" name="Layout_60"></a>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                            class="rnb-container" bgcolor="#ffffff"
                                                            style="background-color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);">

                                                            <tbody>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" class="rnb-container-padding"
                                                                        align="left">

                                                                        <table width="100%" border="0" cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="rnb-columns-container">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th class="rnb-force-col"
                                                                                        style="text-align: left; font-weight: normal; padding-right: 0px;"
                                                                                        valign="top">

                                                                                        <table border="0" valign="top"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0" width="100%"
                                                                                            align="left"
                                                                                            class="rnb-col-1">

                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                style="text-align: center;">
                                                                                                                <span
                                                                                                                    style="color:#47525E;"><span
                                                                                                                        style="font-size:16px;"><strong><span
                                                                                                                                style="background-color: transparent;">Alert Description: </span></strong>“{{ALARM_DESCRIPTION}}”</span></span>
                                                                                                            </div>

                                                                                                            <div>&nbsp;
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                style="text-align: center;">
                                                                                                                <span
                                                                                                                    style="color:#47525E;"><span
                                                                                                                        style="font-size:16px;"><strong><span
                                                                                                                                style="background-color: transparent;">Details: </span></strong>“{{ALARM_DETAILS}}”</span></span>
                                                                                                            </div>

                                                                                                            <div>&nbsp;
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>

                                                                                    </th>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                    </td>
                    <![endif]-->

                                        <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top">

                                    <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">

                                        <!--[if mso]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->

                                        <!--[if mso]>
                    <td valign="top" width="590" style="width:590px;">
                    <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0" style="min-width:100%;" name="Layout_50">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" align="center" valign="top">
                                                        <a href="#" name="Layout_50"></a>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                            class="rnb-container" bgcolor="#ffffff"
                                                            style="background-color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);">

                                                            <tbody>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" class="rnb-container-padding"
                                                                        align="left">

                                                                        <table width="100%" border="0" cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="rnb-columns-container">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th class="rnb-force-col"
                                                                                        style="text-align: left; font-weight: normal; padding-right: 0px;"
                                                                                        valign="top">

                                                                                        <table border="0" valign="top"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0" width="100%"
                                                                                            align="left"
                                                                                            class="rnb-col-1">

                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-size:16px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#47525E;">
                                                                                                        <div
                                                                                                            style="line-height: 20px; text-align: center;">
                                                                                                            <span
                                                                                                                style="background-color: transparent;">{{BE_NOTIFIED}}</span>
                                                                                                        </div>

                                                                                                        <div
                                                                                                            style="line-height: 20px; text-align: center;">
                                                                                                            <span
                                                                                                                style="background-color: transparent;"><br><br>Best
                                                                                                                regards,<br>
                                                                                                                mSuite
                                                                                                                Team.</span>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>

                                                                                    </th>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                    </td>
                    <![endif]-->

                                        <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->

                                    </div>
                                </td>
                            </tr>
                            <tr>

                                <td align="center" valign="top">

                                    <div style="background-color: rgb(30, 135, 250); border-radius: 5px;">

                                        <!--[if mso]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->

                                        <!--[if mso]>
                    <td valign="top" width="590" style="width:590px;">
                    <![endif]-->
                                        <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0"
                                            cellspacing="0" style="min-width:100%;" name="Layout_49">
                                            <tbody>
                                                <tr>
                                                    <td class="rnb-del-min-width" align="center" valign="top">
                                                        <a href="#" name="Layout_49"></a>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                                            class="rnb-container" bgcolor="#1E87FA"
                                                            style="background-color: rgba(36,50,76); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 5px; border-bottom: 0px none rgb(200, 200, 200);">

                                                            <tbody>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" class="rnb-container-padding"
                                                                        align="left">

                                                                        <table width="100%" border="0" cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="rnb-columns-container">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th class="rnb-force-col"
                                                                                        style="text-align: left; font-weight: normal; padding-right: 0px;"
                                                                                        valign="top">

                                                                                        <table border="0" valign="top"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0" width="100%"
                                                                                            align="left"
                                                                                            class="rnb-col-1">

                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-size:14px; font-family:'Lato','Arial',Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                                                                        <div
                                                                                                            style="text-align: center;">
                                                                                                            <span
                                                                                                                style="color:#FFFFFF;">Need
                                                                                                                some
                                                                                                                help?
                                                                                                                Send all
                                                                                                                your
                                                                                                                questions
                                                                                                                to
                                                                                                                support@msuitecloud.com
                                                                                                                or <a
                                                                                                                    href="https://www.msuitecloud.com/gear/monitor/map"
                                                                                                                    target="_blank"
                                                                                                                    style="text-decoration: underline; color: #FFFFFF;">here
                                                                                                                    in
                                                                                                                    the
                                                                                                                    App</a>.</span>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>

                                                                                    </th>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20"
                                                                        style="font-size:1px; line-height:20px; mso-hide: all;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--[if mso]>
                    </td>
                    <![endif]-->

                                        <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--[if gte mso 9]>
                            </td>
                            </tr>
                            </table>
                            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table>

</body>

</html>`;




    //Configuración de alarmas:

    //-------------------------------------------------------------------------------------------------------    
    // Mails:
    let mailsSeverityInformation = ["@ab:168", "@ab:169", "@ab:170", "@ab:171"];
    let mailsSeverityLow = ["@ab:168", "@ab:169", "@ab:170", "@ab:171"];
    let mailsSeverityMedium = ["@ab:168", "@ab:169", "@ab:170", "@ab:171"];
    let mailsSeverityHigh = ["@ab:168", "@ab:169", "@ab:170", "@ab:171"];
    let smsNumbers = ["@ab:172", "@ab:173"];

    //------------------------------------------------------------------------------------------------------- 
    // Templates:
    const alertsMailInformationTemplates = { openTemplate: "", closeTemplate: "" };
    const alertsMailLowTemplates = { openTemplate: "", closeTemplate: "" };
    const alertsMailMediumTemplates = { openTemplate: "", closeTemplate: "" };
    const alertsMailHighTemplates = { openTemplate: "", closeTemplate: "" };

    const alertsMailInformationTemplatesAux = { openTemplate: "", closeTemplate: "" };
    const alertsMailLowTemplatesAux = { openTemplate: "", closeTemplate: "" };
    const alertsMailMediumTemplatesAux = { openTemplate: "", closeTemplate: "" };
    const alertsMailHighTemplatesAux = { openTemplate: "", closeTemplate: "" };



    alertsMailInformationTemplates.openTemplate = templateOfTemplates.replace(/{{IMAGE_PNG}}/gi, 'info-msuite.png').replace(/{{NEW_CLOSED}}/gi, ' ').replace(/{{ALARM_ALERT}}/gi, 'INFO').replace(/{{TEXT_ABOUT}}/gi, 'New notification for the device:').replace(/{{BE_NOTIFIED}}/gi, 'You will be notified if something changes.');

    alertsMailMediumTemplates.openTemplate = templateOfTemplates.replace(/{{IMAGE_PNG}}/gi, 'alerta-msuite.png').replace(/{{NEW_CLOSED}}/gi, 'NEW').replace(/{{ALARM_ALERT}}/gi, 'ALERT').replace(/{{TEXT_ABOUT}}/gi, 'An alert has been closed for the device:').replace(/{{BE_NOTIFIED}}/gi, 'You will be notified when the alert closes.');;
    alertsMailMediumTemplates.closeTemplate = templateOfTemplates.replace(/{{IMAGE_PNG}}/gi, 'notificacion-msuite.png').replace(/{{NEW_CLOSED}}/gi, 'CLOSED').replace(/{{ALARM_ALERT}}/gi, 'ALERT').replace(/{{TEXT_ABOUT}}/gi, 'An alert has been closed for the device:').replace(/{{BE_NOTIFIED}}/gi, 'You will be notified if the alert opens again.');;

    alertsMailHighTemplates.openTemplate = templateOfTemplates.replace(/{{IMAGE_PNG}}/gi, 'alarma-msuite.png').replace(/{{NEW_CLOSED}}/gi, 'NEW').replace(/{{ALARM_ALERT}}/gi, 'ALARM').replace(/{{TEXT_ABOUT}}/gi, 'A new alarm has been opened for the device:').replace(/{{BE_NOTIFIED}}/gi, 'You will be notified when the alarm closes.');;
    alertsMailHighTemplates.closeTemplate = templateOfTemplates.replace(/{{IMAGE_PNG}}/gi, 'notificacion-msuite.png').replace(/{{NEW_CLOSED}}/gi, 'CLOSED').replace(/{{ALARM_ALERT}}/gi, 'ALARM').replace(/{{TEXT_ABOUT}}/gi, 'An alarm has been closed for the device:').replace(/{{BE_NOTIFIED}}/gi, 'You will be notified if the alarm opens again.');;


    alertsMailMediumTemplates.openSubjectTemplate = `Open Alert - {DEVICE_NAME} - {ENDPOINT_NAME}`
    alertsMailMediumTemplates.closeSubjectTemplate = `Closed Alert - {DEVICE_NAME} - {ENDPOINT_NAME}`

    alertsMailHighTemplates.openSubjectTemplate = `Open Alarm - {DEVICE_NAME} - {ENDPOINT_NAME}`
    alertsMailHighTemplates.closeSubjectTemplate = `Closed Alarm - {DEVICE_NAME} - {ENDPOINT_NAME}`




    //-------------------------------------------------------------------------------------------------------
    // Creación: 

    // let alert_485_health_1 = e_485_health.addAlert();

    // alert_485_health_1.variableTypeId = 1643;
    // alert_485_health_1.conditionType = conditionType.lower;
    // alert_485_health_1.threshold = 50;
    // alert_485_health_1.normalConditionType = conditionType.greaterOrEqual;
    // alert_485_health_1.normalThreshold = 50;
    // alert_485_health_1.severity = alarmSeverity.high;
    // alert_485_health_1.notificationEmails = mailsSeverityHigh;
    // alert_485_health_1.emailTemplates = alertsMailHighTemplates;
    // alertsMailHighTemplates.openTemplate = templateOfTemplates.replace(/{{IMAGE_PNG}}/gi, 'alarma-msuite.png').replace(/{{NEW_CLOSED}}/gi, 'NEW').replace(/{{ALARM_ALERT}}/gi, 'ALARM').replace(/{{TEXT_ABOUT}}/gi, 'A new alarm has been opened for the device:').replace(/{{BE_NOTIFIED}}/gi, 'You will be notified when the alarm closes.');;
    // alertsMailHighTemplates.closeTemplate = templateOfTemplates.replace(/{{IMAGE_PNG}}/gi, 'notificacion-msuite.png').replace(/{{NEW_CLOSED}}/gi, 'CLOSED').replace(/{{ALARM_ALERT}}/gi, 'ALARM').replace(/{{TEXT_ABOUT}}/gi, 'An alarm has been closed for the device:').replace(/{{BE_NOTIFIED}}/gi, 'You will be notified if the alarm opens again.');;


    let alert_status_alarmas_0 = e_status_alarmas.addAlert();

    alertsMailMediumTemplatesAux.openTemplate = alertsMailMediumTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `FULL SLURRY TANK!`).replace(/{{ALARM_DETAILS}}/gi, `Dump Tank Full. Unit will not perform until action is taken.`);
    alertsMailMediumTemplatesAux.closeTemplate = alertsMailMediumTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `FULL SLURRY TANK!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailMediumTemplatesAux.openSubjectTemplate = alertsMailMediumTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `FULL SLURRY TANK!`);
    alertsMailMediumTemplatesAux.closeSubjectTemplate = alertsMailMediumTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `FULL SLURRY TANK!`);

    alert_status_alarmas_0.variableTypeId = 1645;
    alert_status_alarmas_0.conditionType = conditionType.equal;
    alert_status_alarmas_0.threshold = 27;
    alert_status_alarmas_0.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_0.normalThreshold = 27;
    alert_status_alarmas_0.severity = alarmSeverity.medium;
    alert_status_alarmas_0.notificationEmails = mailsSeverityMedium;
    alert_status_alarmas_0.emailTemplates = alertsMailMediumTemplatesAux;
    alert_status_alarmas_0.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_0.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: FULL SLURRY TANK!\n Details:  Dump Tank Full. Unit will not perform until action is taken.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: FULL SLURRY TANK!\n Details: -" };
    //--------------------

    let alert_status_alarmas_1 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `IO BOARD COM.ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `Communication error on the mSand internal board.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `IO BOARD COM.ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `IO BOARD COM.ERR.!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `IO BOARD COM.ERR.!`);

    alert_status_alarmas_1.variableTypeId = 1645;
    alert_status_alarmas_1.conditionType = conditionType.equal;
    alert_status_alarmas_1.threshold = 32;
    alert_status_alarmas_1.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_1.normalThreshold = 32;
    alert_status_alarmas_1.severity = alarmSeverity.high;
    alert_status_alarmas_1.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_1.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_1.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_1.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: IO BOARD COM.ERR.!\n Details:  Communication error on the mSand internal board.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: IO BOARD COM.ERR.!\n Details: -" };
    //--------------------

    let alert_status_alarmas_2 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS COM. ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the communication cable between MMS and mSand.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS COM. ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS COM. ERR.!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS COM. ERR.!`);

    alert_status_alarmas_2.variableTypeId = 1645;
    alert_status_alarmas_2.conditionType = conditionType.equal;
    alert_status_alarmas_2.threshold = 33;
    alert_status_alarmas_2.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_2.normalThreshold = 33;
    alert_status_alarmas_2.severity = alarmSeverity.high;
    alert_status_alarmas_2.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_2.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_2.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_2.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS COM. ERR.!\n Details:  Please check the communication cable between MMS and mSand.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS COM. ERR.!\n Details: -" };
    //--------------------

    let alert_status_alarmas_3 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS IO B.COM.ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `Communication error on the internal board of the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS IO B.COM.ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS IO B.COM.ERR.!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS IO B.COM.ERR.!`);

    alert_status_alarmas_3.variableTypeId = 1645;
    alert_status_alarmas_3.conditionType = conditionType.equal;
    alert_status_alarmas_3.threshold = 34;
    alert_status_alarmas_3.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_3.normalThreshold = 34;
    alert_status_alarmas_3.severity = alarmSeverity.high;
    alert_status_alarmas_3.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_3.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_3.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_3.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS IO B.COM.ERR.!\n Details:  Communication error on the internal board of the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS IO B.COM.ERR.!\n Details: -" };
    //--------------------

    let alert_status_alarmas_4 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS ACK ERROR!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the communication cable between MMS and mSand.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS ACK ERROR!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS ACK ERROR!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS ACK ERROR!`);

    alert_status_alarmas_4.variableTypeId = 1645;
    alert_status_alarmas_4.conditionType = conditionType.equal;
    alert_status_alarmas_4.threshold = 35;
    alert_status_alarmas_4.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_4.normalThreshold = 35;
    alert_status_alarmas_4.severity = alarmSeverity.high;
    alert_status_alarmas_4.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_4.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_4.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_4.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS ACK ERROR!\n Details:  Please check the communication cable between MMS and mSand.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS ACK ERROR!\n Details: -" };
    //--------------------

    let alert_status_alarmas_5 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE PV1 OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out and or the calibration of the sensors on mSand dump skid`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE PV1 OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE PV1 OPEN!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE PV1 OPEN!`);

    alert_status_alarmas_5.variableTypeId = 1645;
    alert_status_alarmas_5.conditionType = conditionType.equal;
    alert_status_alarmas_5.threshold = 36;
    alert_status_alarmas_5.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_5.normalThreshold = 36;
    alert_status_alarmas_5.severity = alarmSeverity.high;
    alert_status_alarmas_5.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_5.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_5.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_5.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE PV1 OPEN!\n Details:  Check the valve opening and closing time out and or the calibration of the sensors on mSand dump skid", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE PV1 OPEN!\n Details: -" };
    //--------------------

    let alert_status_alarmas_6 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE PV2 OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out and or the calibration of the sensors on mSand dump skid`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE PV2 OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE PV2 OPEN!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE PV2 OPEN!`);

    alert_status_alarmas_6.variableTypeId = 1645;
    alert_status_alarmas_6.conditionType = conditionType.equal;
    alert_status_alarmas_6.threshold = 37;
    alert_status_alarmas_6.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_6.normalThreshold = 37;
    alert_status_alarmas_6.severity = alarmSeverity.high;
    alert_status_alarmas_6.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_6.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_6.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_6.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE PV2 OPEN!\n Details:  Check the valve opening and closing time out and or the calibration of the sensors on mSand dump skid", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE PV2 OPEN!\n Details: -" };
    //--------------------

    let alert_status_alarmas_7 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE CV3 OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out and or the calibration of the sensors on mSand dump skid`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE CV3 OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE CV3 OPEN!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE CV3 OPEN!`);

    alert_status_alarmas_7.variableTypeId = 1645;
    alert_status_alarmas_7.conditionType = conditionType.equal;
    alert_status_alarmas_7.threshold = 38;
    alert_status_alarmas_7.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_7.normalThreshold = 38;
    alert_status_alarmas_7.severity = alarmSeverity.high;
    alert_status_alarmas_7.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_7.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_7.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_7.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE CV3 OPEN!\n Details:  Check the valve opening and closing time out and or the calibration of the sensors on mSand dump skid", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE CV3 OPEN!\n Details: -" };
    //--------------------

    let alert_status_alarmas_8 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS1PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out and the calibration of the sensors on the MMS Plug Valves`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS1PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS1PV1´OPEN!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS1PV1´OPEN!`);

    alert_status_alarmas_8.variableTypeId = 1645;
    alert_status_alarmas_8.conditionType = conditionType.equal;
    alert_status_alarmas_8.threshold = 39;
    alert_status_alarmas_8.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_8.normalThreshold = 39;
    alert_status_alarmas_8.severity = alarmSeverity.high;
    alert_status_alarmas_8.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_8.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_8.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_8.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE SS1PV1´OPEN!\n Details:  Check the valve opening and closing time out and the calibration of the sensors on the MMS Plug Valves", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE SS1PV1´OPEN!\n Details: -" };
    //--------------------

    let alert_status_alarmas_9 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS2PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out and the calibration of the sensors on the MMS Plug Valves`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS2PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS2PV1´OPEN!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS2PV1´OPEN!`);

    alert_status_alarmas_9.variableTypeId = 1645;
    alert_status_alarmas_9.conditionType = conditionType.equal;
    alert_status_alarmas_9.threshold = 40;
    alert_status_alarmas_9.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_9.normalThreshold = 40;
    alert_status_alarmas_9.severity = alarmSeverity.high;
    alert_status_alarmas_9.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_9.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_9.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_9.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE SS2PV1´OPEN!\n Details:  Check the valve opening and closing time out and the calibration of the sensors on the MMS Plug Valves", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE SS2PV1´OPEN!\n Details: -" };
    //--------------------

    let alert_status_alarmas_10 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS3PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out and the calibration of the sensors on the MMS Plug Valves`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS3PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS3PV1´OPEN!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS3PV1´OPEN!`);

    alert_status_alarmas_10.variableTypeId = 1645;
    alert_status_alarmas_10.conditionType = conditionType.equal;
    alert_status_alarmas_10.threshold = 41;
    alert_status_alarmas_10.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_10.normalThreshold = 41;
    alert_status_alarmas_10.severity = alarmSeverity.high;
    alert_status_alarmas_10.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_10.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_10.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_10.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE SS3PV1´OPEN!\n Details:  Check the valve opening and closing time out and the calibration of the sensors on the MMS Plug Valves", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE SS3PV1´OPEN!\n Details: -" };
    //--------------------

    let alert_status_alarmas_11 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS4PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out and the calibration of the sensors on the MMS Plug Valves`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS4PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS4PV1´OPEN!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS4PV1´OPEN!`);

    alert_status_alarmas_11.variableTypeId = 1645;
    alert_status_alarmas_11.conditionType = conditionType.equal;
    alert_status_alarmas_11.threshold = 42;
    alert_status_alarmas_11.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_11.normalThreshold = 42;
    alert_status_alarmas_11.severity = alarmSeverity.high;
    alert_status_alarmas_11.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_11.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_11.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_11.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE SS4PV1´OPEN!\n Details:  Check the valve opening and closing time out and the calibration of the sensors on the MMS Plug Valves", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE SS4PV1´OPEN!\n Details: -" };
    //--------------------

    let alert_status_alarmas_12 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `BATTERY CB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `Please check if the mSand is connected to the power supply.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `BATTERY CB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `BATTERY CB LOW!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `BATTERY CB LOW!`);

    alert_status_alarmas_12.variableTypeId = 1645;
    alert_status_alarmas_12.conditionType = conditionType.equal;
    alert_status_alarmas_12.threshold = 43;
    alert_status_alarmas_12.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_12.normalThreshold = 43;
    alert_status_alarmas_12.severity = alarmSeverity.high;
    alert_status_alarmas_12.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_12.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_12.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_12.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: BATTERY CB LOW!\n Details:  Please check if the mSand is connected to the power supply.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: BATTERY CB LOW!\n Details: -" };
    //--------------------

    let alert_status_alarmas_13 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `BATTERY PB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `Please check if the mSand is connected to the power supply.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `BATTERY PB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `BATTERY PB LOW!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `BATTERY PB LOW!`);

    alert_status_alarmas_13.variableTypeId = 1645;
    alert_status_alarmas_13.conditionType = conditionType.equal;
    alert_status_alarmas_13.threshold = 44;
    alert_status_alarmas_13.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_13.normalThreshold = 44;
    alert_status_alarmas_13.severity = alarmSeverity.high;
    alert_status_alarmas_13.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_13.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_13.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_13.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: BATTERY PB LOW!\n Details:  Please check if the mSand is connected to the power supply.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: BATTERY PB LOW!\n Details: -" };
    //--------------------

    let alert_status_alarmas_14 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS BAT. CB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `Please check if the MMS is connected to the power supply.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS BAT. CB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS BAT. CB LOW!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS BAT. CB LOW!`);

    alert_status_alarmas_14.variableTypeId = 1645;
    alert_status_alarmas_14.conditionType = conditionType.equal;
    alert_status_alarmas_14.threshold = 45;
    alert_status_alarmas_14.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_14.normalThreshold = 45;
    alert_status_alarmas_14.severity = alarmSeverity.high;
    alert_status_alarmas_14.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_14.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_14.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_14.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS BAT. CB LOW!\n Details:  Please check if the MMS is connected to the power supply.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS BAT. CB LOW!\n Details: -" };
    //--------------------

    let alert_status_alarmas_15 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS BAT. PB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `Please check if the MMS is connected to the power supply.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS BAT. PB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS BAT. PB LOW!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS BAT. PB LOW!`);

    alert_status_alarmas_15.variableTypeId = 1645;
    alert_status_alarmas_15.conditionType = conditionType.equal;
    alert_status_alarmas_15.threshold = 46;
    alert_status_alarmas_15.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_15.normalThreshold = 46;
    alert_status_alarmas_15.severity = alarmSeverity.high;
    alert_status_alarmas_15.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_15.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_15.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_15.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS BAT. PB LOW!\n Details:  Please check if the MMS is connected to the power supply.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS BAT. PB LOW!\n Details: -" };
    //--------------------

    let alert_status_alarmas_16 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS1 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `Sand Separator 1 has been overpressured.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS1 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS1 OVERPRESSURE!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS1 OVERPRESSURE!`);

    alert_status_alarmas_16.variableTypeId = 1645;
    alert_status_alarmas_16.conditionType = conditionType.equal;
    alert_status_alarmas_16.threshold = 47;
    alert_status_alarmas_16.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_16.normalThreshold = 47;
    alert_status_alarmas_16.severity = alarmSeverity.high;
    alert_status_alarmas_16.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_16.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_16.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_16.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS1 OVERPRESSURE!\n Details:  Sand Separator 1 has been overpressured.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS1 OVERPRESSURE!\n Details: -" };
    //--------------------

    let alert_status_alarmas_17 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS2 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `Sand Separator 2 has been overpressured.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS2 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS2 OVERPRESSURE!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS2 OVERPRESSURE!`);

    alert_status_alarmas_17.variableTypeId = 1645;
    alert_status_alarmas_17.conditionType = conditionType.equal;
    alert_status_alarmas_17.threshold = 48;
    alert_status_alarmas_17.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_17.normalThreshold = 48;
    alert_status_alarmas_17.severity = alarmSeverity.high;
    alert_status_alarmas_17.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_17.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_17.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_17.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS2 OVERPRESSURE!\n Details:  Sand Separator 2 has been overpressured.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS2 OVERPRESSURE!\n Details: -" };
    //--------------------

    let alert_status_alarmas_18 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS3 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `Sand Separator 3 has been overpressured.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS3 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS3 OVERPRESSURE!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS3 OVERPRESSURE!`);

    alert_status_alarmas_18.variableTypeId = 1645;
    alert_status_alarmas_18.conditionType = conditionType.equal;
    alert_status_alarmas_18.threshold = 49;
    alert_status_alarmas_18.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_18.normalThreshold = 49;
    alert_status_alarmas_18.severity = alarmSeverity.high;
    alert_status_alarmas_18.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_18.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_18.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_18.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS3 OVERPRESSURE!\n Details:  Sand Separator 3 has been overpressured.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS3 OVERPRESSURE!\n Details: -" };
    //--------------------

    let alert_status_alarmas_19 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS4 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `Sand Separator 4 has been overpressured.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS4 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS4 OVERPRESSURE!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS4 OVERPRESSURE!`);

    alert_status_alarmas_19.variableTypeId = 1645;
    alert_status_alarmas_19.conditionType = conditionType.equal;
    alert_status_alarmas_19.threshold = 50;
    alert_status_alarmas_19.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_19.normalThreshold = 50;
    alert_status_alarmas_19.severity = alarmSeverity.high;
    alert_status_alarmas_19.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_19.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_19.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_19.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS4 OVERPRESSURE!\n Details:  Sand Separator 4 has been overpressured.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS4 OVERPRESSURE!\n Details: -" };
    //--------------------

    let alert_status_alarmas_20 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `AP SENSOR FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the pump of the mSand.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `AP SENSOR FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `AP SENSOR FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `AP SENSOR FAILS!`);

    alert_status_alarmas_20.variableTypeId = 1645;
    alert_status_alarmas_20.conditionType = conditionType.equal;
    alert_status_alarmas_20.threshold = 51;
    alert_status_alarmas_20.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_20.normalThreshold = 51;
    alert_status_alarmas_20.severity = alarmSeverity.high;
    alert_status_alarmas_20.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_20.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_20.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_20.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: AP SENSOR FAILS!\n Details:  Please check the sensor connection on the pump of the mSand.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: AP SENSOR FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_21 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS AP SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS AP SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS AP SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS AP SEN. FAILS!`);

    alert_status_alarmas_21.variableTypeId = 1645;
    alert_status_alarmas_21.conditionType = conditionType.equal;
    alert_status_alarmas_21.threshold = 52;
    alert_status_alarmas_21.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_21.normalThreshold = 52;
    alert_status_alarmas_21.severity = alarmSeverity.high;
    alert_status_alarmas_21.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_21.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_21.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_21.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS AP SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS AP SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_22 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS1PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS1PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS1PT3 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS1PT3 SEN. FAILS!`);

    alert_status_alarmas_22.variableTypeId = 1645;
    alert_status_alarmas_22.conditionType = conditionType.equal;
    alert_status_alarmas_22.threshold = 53;
    alert_status_alarmas_22.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_22.normalThreshold = 53;
    alert_status_alarmas_22.severity = alarmSeverity.high;
    alert_status_alarmas_22.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_22.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_22.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_22.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS1PT3 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS1PT3 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_23 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS2PT3 SEN. FAILS`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS2PT3 SEN. FAILS`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS2PT3 SEN. FAILS`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS2PT3 SEN. FAILS`);

    alert_status_alarmas_23.variableTypeId = 1645;
    alert_status_alarmas_23.conditionType = conditionType.equal;
    alert_status_alarmas_23.threshold = 54;
    alert_status_alarmas_23.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_23.normalThreshold = 54;
    alert_status_alarmas_23.severity = alarmSeverity.high;
    alert_status_alarmas_23.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_23.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_23.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_23.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS2PT3 SEN. FAILS\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS2PT3 SEN. FAILS\n Details: -" };
    //--------------------

    let alert_status_alarmas_24 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS3PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS3PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS3PT3 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS3PT3 SEN. FAILS!`);

    alert_status_alarmas_24.variableTypeId = 1645;
    alert_status_alarmas_24.conditionType = conditionType.equal;
    alert_status_alarmas_24.threshold = 55;
    alert_status_alarmas_24.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_24.normalThreshold = 55;
    alert_status_alarmas_24.severity = alarmSeverity.high;
    alert_status_alarmas_24.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_24.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_24.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_24.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS3PT3 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS3PT3 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_25 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS4PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS4PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS4PT3 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS4PT3 SEN. FAILS!`);

    alert_status_alarmas_25.variableTypeId = 1645;
    alert_status_alarmas_25.conditionType = conditionType.equal;
    alert_status_alarmas_25.threshold = 56;
    alert_status_alarmas_25.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_25.normalThreshold = 56;
    alert_status_alarmas_25.severity = alarmSeverity.high;
    alert_status_alarmas_25.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_25.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_25.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_25.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS4PT3 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS4PT3 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_26 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS1PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS1PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS1PT2 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS1PT2 SEN. FAILS!`);

    alert_status_alarmas_26.variableTypeId = 1645;
    alert_status_alarmas_26.conditionType = conditionType.equal;
    alert_status_alarmas_26.threshold = 57;
    alert_status_alarmas_26.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_26.normalThreshold = 57;
    alert_status_alarmas_26.severity = alarmSeverity.high;
    alert_status_alarmas_26.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_26.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_26.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_26.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS1PT2 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS1PT2 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_27 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS2PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS2PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS2PT2 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS2PT2 SEN. FAILS!`);

    alert_status_alarmas_27.variableTypeId = 1645;
    alert_status_alarmas_27.conditionType = conditionType.equal;
    alert_status_alarmas_27.threshold = 58;
    alert_status_alarmas_27.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_27.normalThreshold = 58;
    alert_status_alarmas_27.severity = alarmSeverity.high;
    alert_status_alarmas_27.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_27.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_27.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_27.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS2PT2 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS2PT2 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_28 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS3PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS3PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS3PT2 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS3PT2 SEN. FAILS!`);

    alert_status_alarmas_28.variableTypeId = 1645;
    alert_status_alarmas_28.conditionType = conditionType.equal;
    alert_status_alarmas_28.threshold = 59;
    alert_status_alarmas_28.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_28.normalThreshold = 59;
    alert_status_alarmas_28.severity = alarmSeverity.high;
    alert_status_alarmas_28.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_28.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_28.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_28.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS3PT2 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS3PT2 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_29 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS4PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS4PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS4PT2 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS4PT2 SEN. FAILS!`);

    alert_status_alarmas_29.variableTypeId = 1645;
    alert_status_alarmas_29.conditionType = conditionType.equal;
    alert_status_alarmas_29.threshold = 60;
    alert_status_alarmas_29.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_29.normalThreshold = 60;
    alert_status_alarmas_29.severity = alarmSeverity.high;
    alert_status_alarmas_29.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_29.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_29.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_29.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS4PT2 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS4PT2 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_30 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `PT1 SENSOR FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the mSand.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `PT1 SENSOR FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `PT1 SENSOR FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `PT1 SENSOR FAILS!`);

    alert_status_alarmas_30.variableTypeId = 1645;
    alert_status_alarmas_30.conditionType = conditionType.equal;
    alert_status_alarmas_30.threshold = 66;
    alert_status_alarmas_30.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_30.normalThreshold = 66;
    alert_status_alarmas_30.severity = alarmSeverity.high;
    alert_status_alarmas_30.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_30.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_30.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_30.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: PT1 SENSOR FAILS!\n Details:  Please check the sensor connection on the mSand.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: PT1 SENSOR FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_31 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 COM. ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the MW8 communication cable`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 COM. ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 COM. ERR.!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 COM. ERR.!`);

    alert_status_alarmas_31.variableTypeId = 1645;
    alert_status_alarmas_31.conditionType = conditionType.equal;
    alert_status_alarmas_31.threshold = 67;
    alert_status_alarmas_31.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_31.normalThreshold = 67;
    alert_status_alarmas_31.severity = alarmSeverity.high;
    alert_status_alarmas_31.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_31.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_31.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_31.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MW8 COM. ERR.!\n Details:  Please check the MW8 communication cable", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MW8 COM. ERR.!\n Details: -" };
    //--------------------

    let alert_status_alarmas_32 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 ACK ERROR!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the MW8 communication cable`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 ACK ERROR!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 ACK ERROR!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 ACK ERROR!`);

    alert_status_alarmas_32.variableTypeId = 1645;
    alert_status_alarmas_32.conditionType = conditionType.equal;
    alert_status_alarmas_32.threshold = 68;
    alert_status_alarmas_32.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_32.normalThreshold = 68;
    alert_status_alarmas_32.severity = alarmSeverity.high;
    alert_status_alarmas_32.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_32.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_32.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_32.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MW8 ACK ERROR!\n Details:  Please check the MW8 communication cable", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MW8 ACK ERROR!\n Details: -" };
    //--------------------

    let alert_status_alarmas_33 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 SCREEN POSITION ERROR!`).replace(/{{ALARM_DETAILS}}/gi, `Check the screen and sensor calibration on MW8`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 SCREEN POSITION ERROR!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 SCREEN POSITION ERROR!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 SCREEN POSITION ERROR!`);

    alert_status_alarmas_33.variableTypeId = 1645;
    alert_status_alarmas_33.conditionType = conditionType.equal;
    alert_status_alarmas_33.threshold = 69;
    alert_status_alarmas_33.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_33.normalThreshold = 69;
    alert_status_alarmas_33.severity = alarmSeverity.high;
    alert_status_alarmas_33.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_33.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_33.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_33.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MW8 SCREEN POSITION ERROR!\n Details:  Check the screen and sensor calibration on MW8", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MW8 SCREEN POSITION ERROR!\n Details: -" };
    //--------------------

    let alert_status_alarmas_34 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 BAT. CB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `Please check if the MW8 is connected to the power supply.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 BAT. CB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 BAT. CB LOW!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 BAT. CB LOW!`);

    alert_status_alarmas_34.variableTypeId = 1645;
    alert_status_alarmas_34.conditionType = conditionType.equal;
    alert_status_alarmas_34.threshold = 70;
    alert_status_alarmas_34.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_34.normalThreshold = 70;
    alert_status_alarmas_34.severity = alarmSeverity.high;
    alert_status_alarmas_34.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_34.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_34.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_34.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MW8 BAT. CB LOW!\n Details:  Please check if the MW8 is connected to the power supply.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MW8 BAT. CB LOW!\n Details: -" };
    //--------------------

    let alert_status_alarmas_35 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 BAT. PB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `Please check if the MW8 is connected to the power supply.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 BAT. PB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 BAT. PB LOW!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 BAT. PB LOW!`);

    alert_status_alarmas_35.variableTypeId = 1645;
    alert_status_alarmas_35.conditionType = conditionType.equal;
    alert_status_alarmas_35.threshold = 71;
    alert_status_alarmas_35.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_35.normalThreshold = 71;
    alert_status_alarmas_35.severity = alarmSeverity.high;
    alert_status_alarmas_35.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_35.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_35.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_35.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MW8 BAT. PB LOW!\n Details:  Please check if the MW8 is connected to the power supply.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MW8 BAT. PB LOW!\n Details: -" };
    //--------------------

    let alert_status_alarmas_36 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 AP SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the pump of MW8`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 AP SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 AP SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 AP SEN. FAILS!`);

    alert_status_alarmas_36.variableTypeId = 1645;
    alert_status_alarmas_36.conditionType = conditionType.equal;
    alert_status_alarmas_36.threshold = 72;
    alert_status_alarmas_36.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_36.normalThreshold = 72;
    alert_status_alarmas_36.severity = alarmSeverity.high;
    alert_status_alarmas_36.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_36.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_36.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_36.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MW8 AP SEN. FAILS!\n Details:  Please check the sensor connection on the pump of MW8", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MW8 AP SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_37 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 WG1 SEN.FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the load cells of MW8`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 WG1 SEN.FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 WG1 SEN.FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 WG1 SEN.FAILS!`);

    alert_status_alarmas_37.variableTypeId = 1645;
    alert_status_alarmas_37.conditionType = conditionType.equal;
    alert_status_alarmas_37.threshold = 73;
    alert_status_alarmas_37.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_37.normalThreshold = 73;
    alert_status_alarmas_37.severity = alarmSeverity.high;
    alert_status_alarmas_37.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_37.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_37.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_37.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MW8 WG1 SEN.FAILS!\n Details:  Please check the sensor connection on the load cells of MW8", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MW8 WG1 SEN.FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_38 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS OP. TIMEOUT!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the operation of the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS OP. TIMEOUT!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS OP. TIMEOUT!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS OP. TIMEOUT!`);

    alert_status_alarmas_38.variableTypeId = 1645;
    alert_status_alarmas_38.conditionType = conditionType.equal;
    alert_status_alarmas_38.threshold = 77;
    alert_status_alarmas_38.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_38.normalThreshold = 77;
    alert_status_alarmas_38.severity = alarmSeverity.high;
    alert_status_alarmas_38.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_38.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_38.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_38.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS OP. TIMEOUT!\n Details:  Please check the operation of the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS OP. TIMEOUT!\n Details: -" };
    //--------------------

    let alert_status_alarmas_39 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS1PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the MMS).`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS1PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS1PV1' FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS1PV1' FAILS!`);

    alert_status_alarmas_39.variableTypeId = 1645;
    alert_status_alarmas_39.conditionType = conditionType.equal;
    alert_status_alarmas_39.threshold = 78;
    alert_status_alarmas_39.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_39.normalThreshold = 78;
    alert_status_alarmas_39.severity = alarmSeverity.high;
    alert_status_alarmas_39.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_39.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_39.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_39.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: V. SS1PV1' FAILS!\n Details:  Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the MMS).", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: V. SS1PV1' FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_40 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS2PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the MMS).`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS2PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS2PV1' FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS2PV1' FAILS!`);

    alert_status_alarmas_40.variableTypeId = 1645;
    alert_status_alarmas_40.conditionType = conditionType.equal;
    alert_status_alarmas_40.threshold = 79;
    alert_status_alarmas_40.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_40.normalThreshold = 79;
    alert_status_alarmas_40.severity = alarmSeverity.high;
    alert_status_alarmas_40.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_40.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_40.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_40.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: V. SS2PV1' FAILS!\n Details:  Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the MMS).", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: V. SS2PV1' FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_41 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS3PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the MMS).`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS3PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS3PV1' FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS3PV1' FAILS!`);

    alert_status_alarmas_41.variableTypeId = 1645;
    alert_status_alarmas_41.conditionType = conditionType.equal;
    alert_status_alarmas_41.threshold = 80;
    alert_status_alarmas_41.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_41.normalThreshold = 80;
    alert_status_alarmas_41.severity = alarmSeverity.high;
    alert_status_alarmas_41.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_41.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_41.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_41.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: V. SS3PV1' FAILS!\n Details:  Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the MMS).", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: V. SS3PV1' FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_42 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS4PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the MMS).`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS4PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS4PV1' FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS4PV1' FAILS!`);

    alert_status_alarmas_42.variableTypeId = 1645;
    alert_status_alarmas_42.conditionType = conditionType.equal;
    alert_status_alarmas_42.threshold = 81;
    alert_status_alarmas_42.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_42.normalThreshold = 81;
    alert_status_alarmas_42.severity = alarmSeverity.high;
    alert_status_alarmas_42.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_42.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_42.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_42.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: V. SS4PV1' FAILS!\n Details:  Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the MMS).", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: V. SS4PV1' FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_43 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE PV1 FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the mSand).`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE PV1 FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE PV1 FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE PV1 FAILS!`);

    alert_status_alarmas_43.variableTypeId = 1645;
    alert_status_alarmas_43.conditionType = conditionType.equal;
    alert_status_alarmas_43.threshold = 82;
    alert_status_alarmas_43.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_43.normalThreshold = 82;
    alert_status_alarmas_43.severity = alarmSeverity.high;
    alert_status_alarmas_43.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_43.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_43.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_43.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE PV1 FAILS!\n Details:  Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the mSand).", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE PV1 FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_44 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE PV2 FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the mSand).`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE PV2 FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE PV2 FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE PV2 FAILS!`);

    alert_status_alarmas_44.variableTypeId = 1645;
    alert_status_alarmas_44.conditionType = conditionType.equal;
    alert_status_alarmas_44.threshold = 83;
    alert_status_alarmas_44.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_44.normalThreshold = 83;
    alert_status_alarmas_44.severity = alarmSeverity.high;
    alert_status_alarmas_44.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_44.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_44.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_44.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE PV2 FAILS!\n Details:  Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the mSand).", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE PV2 FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_45 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE CV3 FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the mSand).`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE CV3 FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE CV3 FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE CV3 FAILS!`);

    alert_status_alarmas_45.variableTypeId = 1645;
    alert_status_alarmas_45.conditionType = conditionType.equal;
    alert_status_alarmas_45.threshold = 84;
    alert_status_alarmas_45.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_45.normalThreshold = 84;
    alert_status_alarmas_45.severity = alarmSeverity.high;
    alert_status_alarmas_45.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_45.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_45.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_45.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE CV3 FAILS!\n Details:  Check the valve opening and closing time out, the calibration of the sensors and the operation of the valve (in the mSand).", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE CV3 FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_46 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `PV2 SEAT FAIL!`).replace(/{{ALARM_DETAILS}}/gi, `Plug Valve 2 has been cut`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `PV2 SEAT FAIL!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `PV2 SEAT FAIL!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `PV2 SEAT FAIL!`);

    alert_status_alarmas_46.variableTypeId = 1645;
    alert_status_alarmas_46.conditionType = conditionType.equal;
    alert_status_alarmas_46.threshold = 85;
    alert_status_alarmas_46.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_46.normalThreshold = 85;
    alert_status_alarmas_46.severity = alarmSeverity.high;
    alert_status_alarmas_46.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_46.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_46.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_46.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: PV2 SEAT FAIL!\n Details:  Plug Valve 2 has been cut", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: PV2 SEAT FAIL!\n Details: -" };
    //--------------------

    let alert_status_alarmas_47 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE INTEGRITY TEST FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Review PT1 sensor calibration and assess if there is any obstruction in the mSand dump skid or on the dump line of mSand unit. Otherwise, Valve need to be replaced or re-built`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE INTEGRITY TEST FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE INTEGRITY TEST FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE INTEGRITY TEST FAILS!`);

    alert_status_alarmas_47.variableTypeId = 1645;
    alert_status_alarmas_47.conditionType = conditionType.equal;
    alert_status_alarmas_47.threshold = 86;
    alert_status_alarmas_47.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_47.normalThreshold = 86;
    alert_status_alarmas_47.severity = alarmSeverity.high;
    alert_status_alarmas_47.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_47.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_47.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_47.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE INTEGRITY TEST FAILS!\n Details:  Review PT1 sensor calibration and assess if there is any obstruction in the mSand dump skid or on the dump line of mSand unit. Otherwise, Valve need to be replaced or re-built", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE INTEGRITY TEST FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_48 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `PV1 SEAT FAIL!`).replace(/{{ALARM_DETAILS}}/gi, `Plug Valve 1 has been cut`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `PV1 SEAT FAIL!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `PV1 SEAT FAIL!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `PV1 SEAT FAIL!`);

    alert_status_alarmas_48.variableTypeId = 1645;
    alert_status_alarmas_48.conditionType = conditionType.equal;
    alert_status_alarmas_48.threshold = 87;
    alert_status_alarmas_48.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_48.normalThreshold = 87;
    alert_status_alarmas_48.severity = alarmSeverity.high;
    alert_status_alarmas_48.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_48.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_48.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_48.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: PV1 SEAT FAIL!\n Details:  Plug Valve 1 has been cut", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: PV1 SEAT FAIL!\n Details: -" };
    //--------------------

    let alert_status_alarmas_49 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `PT1 LOW FOR TEST!`).replace(/{{ALARM_DETAILS}}/gi, `PT1 pressure is not enough to perform the integrity test.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `PT1 LOW FOR TEST!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `PT1 LOW FOR TEST!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `PT1 LOW FOR TEST!`);

    alert_status_alarmas_49.variableTypeId = 1645;
    alert_status_alarmas_49.conditionType = conditionType.equal;
    alert_status_alarmas_49.threshold = 88;
    alert_status_alarmas_49.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_49.normalThreshold = 88;
    alert_status_alarmas_49.severity = alarmSeverity.high;
    alert_status_alarmas_49.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_49.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_49.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_49.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: PT1 LOW FOR TEST!\n Details:  PT1 pressure is not enough to perform the integrity test.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: PT1 LOW FOR TEST!\n Details: -" };
    //--------------------

    let alert_status_alarmas_50 = e_status_alarmas.addAlert();

    alertsMailMediumTemplatesAux.openTemplate = alertsMailMediumTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 SCREEN POSITION ERROR!`).replace(/{{ALARM_DETAILS}}/gi, `Check the screen and sensor calibration on MW8`);
    alertsMailMediumTemplatesAux.closeTemplate = alertsMailMediumTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MW8 SCREEN POSITION ERROR!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailMediumTemplatesAux.openSubjectTemplate = alertsMailMediumTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 SCREEN POSITION ERROR!`);
    alertsMailMediumTemplatesAux.closeSubjectTemplate = alertsMailMediumTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MW8 SCREEN POSITION ERROR!`);

    alert_status_alarmas_50.variableTypeId = 1645;
    alert_status_alarmas_50.conditionType = conditionType.equal;
    alert_status_alarmas_50.threshold = 89;
    alert_status_alarmas_50.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_50.normalThreshold = 89;
    alert_status_alarmas_50.severity = alarmSeverity.medium;
    alert_status_alarmas_50.notificationEmails = mailsSeverityMedium;
    alert_status_alarmas_50.emailTemplates = alertsMailMediumTemplatesAux;
    alert_status_alarmas_50.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_50.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MW8 SCREEN POSITION ERROR!\n Details:  Check the screen and sensor calibration on MW8", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MW8 SCREEN POSITION ERROR!\n Details: -" };
    //--------------------

    let alert_status_alarmas_51 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 COM. ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the communication cable between MMS and mSand.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 COM. ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 COM. ERR.!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 COM. ERR.!`);

    alert_status_alarmas_51.variableTypeId = 1645;
    alert_status_alarmas_51.conditionType = conditionType.equal;
    alert_status_alarmas_51.threshold = 100;
    alert_status_alarmas_51.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_51.normalThreshold = 100;
    alert_status_alarmas_51.severity = alarmSeverity.high;
    alert_status_alarmas_51.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_51.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_51.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_51.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS2 COM. ERR.!\n Details:  Please check the communication cable between MMS and mSand.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS2 COM. ERR.!\n Details: -" };
    //--------------------

    let alert_status_alarmas_52 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 IO B.COM.ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `Communication error on the mSand internal board.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 IO B.COM.ERR.!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 IO B.COM.ERR.!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 IO B.COM.ERR.!`);

    alert_status_alarmas_52.variableTypeId = 1645;
    alert_status_alarmas_52.conditionType = conditionType.equal;
    alert_status_alarmas_52.threshold = 101;
    alert_status_alarmas_52.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_52.normalThreshold = 101;
    alert_status_alarmas_52.severity = alarmSeverity.high;
    alert_status_alarmas_52.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_52.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_52.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_52.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS2 IO B.COM.ERR.!\n Details:  Communication error on the mSand internal board.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS2 IO B.COM.ERR.!\n Details: -" };
    //--------------------

    let alert_status_alarmas_53 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 ACK ERROR!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the communication cable between MMS and mSand.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 ACK ERROR!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 ACK ERROR!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 ACK ERROR!`);

    alert_status_alarmas_53.variableTypeId = 1645;
    alert_status_alarmas_53.conditionType = conditionType.equal;
    alert_status_alarmas_53.threshold = 102;
    alert_status_alarmas_53.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_53.normalThreshold = 102;
    alert_status_alarmas_53.severity = alarmSeverity.high;
    alert_status_alarmas_53.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_53.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_53.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_53.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS2 ACK ERROR!\n Details:  Please check the communication cable between MMS and mSand.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS2 ACK ERROR!\n Details: -" };
    //--------------------

    let alert_status_alarmas_54 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS5PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out and the calibration of the sensors in the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS5PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS5PV1´OPEN!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS5PV1´OPEN!`);

    alert_status_alarmas_54.variableTypeId = 1645;
    alert_status_alarmas_54.conditionType = conditionType.equal;
    alert_status_alarmas_54.threshold = 103;
    alert_status_alarmas_54.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_54.normalThreshold = 103;
    alert_status_alarmas_54.severity = alarmSeverity.high;
    alert_status_alarmas_54.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_54.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_54.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_54.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE SS5PV1´OPEN!\n Details:  Check the valve opening and closing time out and the calibration of the sensors in the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE SS5PV1´OPEN!\n Details: -" };
    //--------------------

    let alert_status_alarmas_55 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS6PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out and the calibration of the sensors in the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS6PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS6PV1´OPEN!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS6PV1´OPEN!`);

    alert_status_alarmas_55.variableTypeId = 1645;
    alert_status_alarmas_55.conditionType = conditionType.equal;
    alert_status_alarmas_55.threshold = 104;
    alert_status_alarmas_55.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_55.normalThreshold = 104;
    alert_status_alarmas_55.severity = alarmSeverity.high;
    alert_status_alarmas_55.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_55.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_55.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_55.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE SS6PV1´OPEN!\n Details:  Check the valve opening and closing time out and the calibration of the sensors in the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE SS6PV1´OPEN!\n Details: -" };
    //--------------------

    let alert_status_alarmas_56 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS7PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out and the calibration of the sensors in the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS7PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS7PV1´OPEN!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS7PV1´OPEN!`);

    alert_status_alarmas_56.variableTypeId = 1645;
    alert_status_alarmas_56.conditionType = conditionType.equal;
    alert_status_alarmas_56.threshold = 105;
    alert_status_alarmas_56.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_56.normalThreshold = 105;
    alert_status_alarmas_56.severity = alarmSeverity.high;
    alert_status_alarmas_56.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_56.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_56.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_56.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE SS7PV1´OPEN!\n Details:  Check the valve opening and closing time out and the calibration of the sensors in the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE SS7PV1´OPEN!\n Details: -" };
    //--------------------

    let alert_status_alarmas_57 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS8PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out and the calibration of the sensors in the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `VALVE SS8PV1´OPEN!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS8PV1´OPEN!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `VALVE SS8PV1´OPEN!`);

    alert_status_alarmas_57.variableTypeId = 1645;
    alert_status_alarmas_57.conditionType = conditionType.equal;
    alert_status_alarmas_57.threshold = 106;
    alert_status_alarmas_57.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_57.normalThreshold = 106;
    alert_status_alarmas_57.severity = alarmSeverity.high;
    alert_status_alarmas_57.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_57.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_57.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_57.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: VALVE SS8PV1´OPEN!\n Details:  Check the valve opening and closing time out and the calibration of the sensors in the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: VALVE SS8PV1´OPEN!\n Details: -" };
    //--------------------

    let alert_status_alarmas_58 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 BAT. CB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `Please check if the MMS is connected to the power supply.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 BAT. CB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 BAT. CB LOW!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 BAT. CB LOW!`);

    alert_status_alarmas_58.variableTypeId = 1645;
    alert_status_alarmas_58.conditionType = conditionType.equal;
    alert_status_alarmas_58.threshold = 107;
    alert_status_alarmas_58.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_58.normalThreshold = 107;
    alert_status_alarmas_58.severity = alarmSeverity.high;
    alert_status_alarmas_58.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_58.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_58.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_58.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS2 BAT. CB LOW!\n Details:  Please check if the MMS is connected to the power supply.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS2 BAT. CB LOW!\n Details: -" };
    //--------------------

    let alert_status_alarmas_59 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 BAT. PB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `Please check if the MMS is connected to the power supply.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 BAT. PB LOW!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 BAT. PB LOW!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 BAT. PB LOW!`);

    alert_status_alarmas_59.variableTypeId = 1645;
    alert_status_alarmas_59.conditionType = conditionType.equal;
    alert_status_alarmas_59.threshold = 108;
    alert_status_alarmas_59.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_59.normalThreshold = 108;
    alert_status_alarmas_59.severity = alarmSeverity.high;
    alert_status_alarmas_59.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_59.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_59.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_59.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS2 BAT. PB LOW!\n Details:  Please check if the MMS is connected to the power supply.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS2 BAT. PB LOW!\n Details: -" };
    //--------------------

    let alert_status_alarmas_60 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS5 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `Sand Separator 5 has been overpressured`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS5 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS5 OVERPRESSURE!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS5 OVERPRESSURE!`);

    alert_status_alarmas_60.variableTypeId = 1645;
    alert_status_alarmas_60.conditionType = conditionType.equal;
    alert_status_alarmas_60.threshold = 109;
    alert_status_alarmas_60.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_60.normalThreshold = 109;
    alert_status_alarmas_60.severity = alarmSeverity.high;
    alert_status_alarmas_60.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_60.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_60.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_60.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS5 OVERPRESSURE!\n Details:  Sand Separator 5 has been overpressured", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS5 OVERPRESSURE!\n Details: -" };
    //--------------------

    let alert_status_alarmas_61 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS6 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `Sand Separator 6 has been overpressured`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS6 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS6 OVERPRESSURE!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS6 OVERPRESSURE!`);

    alert_status_alarmas_61.variableTypeId = 1645;
    alert_status_alarmas_61.conditionType = conditionType.equal;
    alert_status_alarmas_61.threshold = 110;
    alert_status_alarmas_61.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_61.normalThreshold = 110;
    alert_status_alarmas_61.severity = alarmSeverity.high;
    alert_status_alarmas_61.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_61.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_61.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_61.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS6 OVERPRESSURE!\n Details:  Sand Separator 6 has been overpressured", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS6 OVERPRESSURE!\n Details: -" };
    //--------------------

    let alert_status_alarmas_62 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS7 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `Sand Separator 7 has been overpressured`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS7 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS7 OVERPRESSURE!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS7 OVERPRESSURE!`);

    alert_status_alarmas_62.variableTypeId = 1645;
    alert_status_alarmas_62.conditionType = conditionType.equal;
    alert_status_alarmas_62.threshold = 111;
    alert_status_alarmas_62.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_62.normalThreshold = 111;
    alert_status_alarmas_62.severity = alarmSeverity.high;
    alert_status_alarmas_62.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_62.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_62.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_62.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS7 OVERPRESSURE!\n Details:  Sand Separator 7 has been overpressured", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS7 OVERPRESSURE!\n Details: -" };
    //--------------------

    let alert_status_alarmas_63 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS8 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `Sand Separator 8 has been overpressured`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS8 OVERPRESSURE!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS8 OVERPRESSURE!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS8 OVERPRESSURE!`);

    alert_status_alarmas_63.variableTypeId = 1645;
    alert_status_alarmas_63.conditionType = conditionType.equal;
    alert_status_alarmas_63.threshold = 112;
    alert_status_alarmas_63.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_63.normalThreshold = 112;
    alert_status_alarmas_63.severity = alarmSeverity.high;
    alert_status_alarmas_63.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_63.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_63.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_63.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS8 OVERPRESSURE!\n Details:  Sand Separator 8 has been overpressured", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS8 OVERPRESSURE!\n Details: -" };
    //--------------------

    let alert_status_alarmas_64 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 AP SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the pump of MMS`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 AP SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 AP SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 AP SEN. FAILS!`);

    alert_status_alarmas_64.variableTypeId = 1645;
    alert_status_alarmas_64.conditionType = conditionType.equal;
    alert_status_alarmas_64.threshold = 113;
    alert_status_alarmas_64.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_64.normalThreshold = 113;
    alert_status_alarmas_64.severity = alarmSeverity.high;
    alert_status_alarmas_64.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_64.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_64.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_64.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS2 AP SEN. FAILS!\n Details:  Please check the sensor connection on the pump of MMS", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS2 AP SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_65 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS5PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS5PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS5PT3 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS5PT3 SEN. FAILS!`);

    alert_status_alarmas_65.variableTypeId = 1645;
    alert_status_alarmas_65.conditionType = conditionType.equal;
    alert_status_alarmas_65.threshold = 114;
    alert_status_alarmas_65.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_65.normalThreshold = 114;
    alert_status_alarmas_65.severity = alarmSeverity.high;
    alert_status_alarmas_65.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_65.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_65.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_65.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS5PT3 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS5PT3 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_66 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS6PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS6PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS6PT3 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS6PT3 SEN. FAILS!`);

    alert_status_alarmas_66.variableTypeId = 1645;
    alert_status_alarmas_66.conditionType = conditionType.equal;
    alert_status_alarmas_66.threshold = 115;
    alert_status_alarmas_66.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_66.normalThreshold = 115;
    alert_status_alarmas_66.severity = alarmSeverity.high;
    alert_status_alarmas_66.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_66.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_66.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_66.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS6PT3 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS6PT3 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_67 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS7PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS7PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS7PT3 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS7PT3 SEN. FAILS!`);

    alert_status_alarmas_67.variableTypeId = 1645;
    alert_status_alarmas_67.conditionType = conditionType.equal;
    alert_status_alarmas_67.threshold = 116;
    alert_status_alarmas_67.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_67.normalThreshold = 116;
    alert_status_alarmas_67.severity = alarmSeverity.high;
    alert_status_alarmas_67.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_67.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_67.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_67.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS7PT3 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS7PT3 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_68 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS8PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS8PT3 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS8PT3 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS8PT3 SEN. FAILS!`);

    alert_status_alarmas_68.variableTypeId = 1645;
    alert_status_alarmas_68.conditionType = conditionType.equal;
    alert_status_alarmas_68.threshold = 117;
    alert_status_alarmas_68.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_68.normalThreshold = 117;
    alert_status_alarmas_68.severity = alarmSeverity.high;
    alert_status_alarmas_68.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_68.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_68.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_68.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS8PT3 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS8PT3 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_69 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS5PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS5PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS5PT2 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS5PT2 SEN. FAILS!`);

    alert_status_alarmas_69.variableTypeId = 1645;
    alert_status_alarmas_69.conditionType = conditionType.equal;
    alert_status_alarmas_69.threshold = 118;
    alert_status_alarmas_69.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_69.normalThreshold = 118;
    alert_status_alarmas_69.severity = alarmSeverity.high;
    alert_status_alarmas_69.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_69.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_69.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_69.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS5PT2 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS5PT2 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_70 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS6PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS6PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS6PT2 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS6PT2 SEN. FAILS!`);

    alert_status_alarmas_70.variableTypeId = 1645;
    alert_status_alarmas_70.conditionType = conditionType.equal;
    alert_status_alarmas_70.threshold = 119;
    alert_status_alarmas_70.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_70.normalThreshold = 119;
    alert_status_alarmas_70.severity = alarmSeverity.high;
    alert_status_alarmas_70.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_70.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_70.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_70.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS6PT2 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS6PT2 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_71 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS7PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS7PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS7PT2 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS7PT2 SEN. FAILS!`);

    alert_status_alarmas_71.variableTypeId = 1645;
    alert_status_alarmas_71.conditionType = conditionType.equal;
    alert_status_alarmas_71.threshold = 120;
    alert_status_alarmas_71.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_71.normalThreshold = 120;
    alert_status_alarmas_71.severity = alarmSeverity.high;
    alert_status_alarmas_71.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_71.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_71.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_71.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS7PT2 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS7PT2 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_72 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS8PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `SS8PT2 SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS8PT2 SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `SS8PT2 SEN. FAILS!`);

    alert_status_alarmas_72.variableTypeId = 1645;
    alert_status_alarmas_72.conditionType = conditionType.equal;
    alert_status_alarmas_72.threshold = 121;
    alert_status_alarmas_72.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_72.normalThreshold = 121;
    alert_status_alarmas_72.severity = alarmSeverity.high;
    alert_status_alarmas_72.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_72.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_72.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_72.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: SS8PT2 SEN. FAILS!\n Details:  Please check the sensor connection on the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: SS8PT2 SEN. FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_73 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `P1 SENSOR FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the mSand.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `P1 SENSOR FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `P1 SENSOR FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `P1 SENSOR FAILS!`);

    alert_status_alarmas_73.variableTypeId = 1645;
    alert_status_alarmas_73.conditionType = conditionType.equal;
    alert_status_alarmas_73.threshold = 122;
    alert_status_alarmas_73.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_73.normalThreshold = 122;
    alert_status_alarmas_73.severity = alarmSeverity.high;
    alert_status_alarmas_73.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_73.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_73.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_73.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: P1 SENSOR FAILS!\n Details:  Please check the sensor connection on the mSand.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: P1 SENSOR FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_74 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 OP. TIMEOUT!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the operation of the MMS.`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `MMS2 OP. TIMEOUT!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 OP. TIMEOUT!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `MMS2 OP. TIMEOUT!`);

    alert_status_alarmas_74.variableTypeId = 1645;
    alert_status_alarmas_74.conditionType = conditionType.equal;
    alert_status_alarmas_74.threshold = 123;
    alert_status_alarmas_74.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_74.normalThreshold = 123;
    alert_status_alarmas_74.severity = alarmSeverity.high;
    alert_status_alarmas_74.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_74.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_74.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_74.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: MMS2 OP. TIMEOUT!\n Details:  Please check the operation of the MMS.", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: MMS2 OP. TIMEOUT!\n Details: -" };
    //--------------------

    let alert_status_alarmas_75 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS5PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out, the calibration of the sensors and or the operation of the MMS valve`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS5PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS5PV1' FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS5PV1' FAILS!`);

    alert_status_alarmas_75.variableTypeId = 1645;
    alert_status_alarmas_75.conditionType = conditionType.equal;
    alert_status_alarmas_75.threshold = 124;
    alert_status_alarmas_75.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_75.normalThreshold = 124;
    alert_status_alarmas_75.severity = alarmSeverity.high;
    alert_status_alarmas_75.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_75.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_75.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_75.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: V. SS5PV1' FAILS!\n Details:  Check the valve opening and closing time out, the calibration of the sensors and or the operation of the MMS valve", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: V. SS5PV1' FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_76 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS6PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out, the calibration of the sensors and or the operation of the MMS valve`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS6PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS6PV1' FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS6PV1' FAILS!`);

    alert_status_alarmas_76.variableTypeId = 1645;
    alert_status_alarmas_76.conditionType = conditionType.equal;
    alert_status_alarmas_76.threshold = 125;
    alert_status_alarmas_76.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_76.normalThreshold = 125;
    alert_status_alarmas_76.severity = alarmSeverity.high;
    alert_status_alarmas_76.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_76.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_76.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_76.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: V. SS6PV1' FAILS!\n Details:  Check the valve opening and closing time out, the calibration of the sensors and or the operation of the MMS valve", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: V. SS6PV1' FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_77 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS7PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out, the calibration of the sensors and or the operation of the MMS valve`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS7PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS7PV1' FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS7PV1' FAILS!`);

    alert_status_alarmas_77.variableTypeId = 1645;
    alert_status_alarmas_77.conditionType = conditionType.equal;
    alert_status_alarmas_77.threshold = 126;
    alert_status_alarmas_77.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_77.normalThreshold = 126;
    alert_status_alarmas_77.severity = alarmSeverity.high;
    alert_status_alarmas_77.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_77.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_77.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_77.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: V. SS7PV1' FAILS!\n Details:  Check the valve opening and closing time out, the calibration of the sensors and or the operation of the MMS valve", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: V. SS7PV1' FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_78 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS8PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Check the valve opening and closing time out, the calibration of the sensors and or the operation of the MMS valve`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `V. SS8PV1' FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS8PV1' FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `V. SS8PV1' FAILS!`);

    alert_status_alarmas_78.variableTypeId = 1645;
    alert_status_alarmas_78.conditionType = conditionType.equal;
    alert_status_alarmas_78.threshold = 127;
    alert_status_alarmas_78.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_78.normalThreshold = 127;
    alert_status_alarmas_78.severity = alarmSeverity.high;
    alert_status_alarmas_78.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_78.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_78.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_78.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: V. SS8PV1' FAILS!\n Details:  Check the valve opening and closing time out, the calibration of the sensors and or the operation of the MMS valve", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: V. SS8PV1' FAILS!\n Details: -" };
    //--------------------

    let alert_status_alarmas_79 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `ANY SSx PV1' SEAT FAIL!`).replace(/{{ALARM_DETAILS}}/gi, `Plug Valve "1" is not holding pressure and likely needs to be replaced or rebuilt`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `ANY SSx PV1' SEAT FAIL!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `ANY SSx PV1' SEAT FAIL!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `ANY SSx PV1' SEAT FAIL!`);

    alert_status_alarmas_79.variableTypeId = 1645;
    alert_status_alarmas_79.conditionType = conditionType.equal;
    alert_status_alarmas_79.threshold = 128;
    alert_status_alarmas_79.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_79.normalThreshold = 128;
    alert_status_alarmas_79.severity = alarmSeverity.high;
    alert_status_alarmas_79.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_79.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_79.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_79.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: ANY SSx PV1' SEAT FAIL!\n Details:  Plug Valve \"1\" is not holding pressure and likely needs to be replaced or rebuilt", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: ANY SSx PV1' SEAT FAIL!\n Details: -" };
    //--------------------

    let alert_status_alarmas_80 = e_status_alarmas.addAlert();

    alertsMailHighTemplatesAux.openTemplate = alertsMailHighTemplates.openTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `LEVEL SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `Please check the sensor connection on the level sensor`);
    alertsMailHighTemplatesAux.closeTemplate = alertsMailHighTemplates.closeTemplate.replace(/{{ALARM_DESCRIPTION}}/gi, `LEVEL SEN. FAILS!`).replace(/{{ALARM_DETAILS}}/gi, `-`);
    alertsMailHighTemplatesAux.openSubjectTemplate = alertsMailHighTemplates.openSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `LEVEL SEN. FAILS!`);
    alertsMailHighTemplatesAux.closeSubjectTemplate = alertsMailHighTemplates.closeSubjectTemplate.replace(/{ENDPOINT_NAME}/gi, `LEVEL SEN. FAILS!`);

    alert_status_alarmas_80.variableTypeId = 1645;
    alert_status_alarmas_80.conditionType = conditionType.equal;
    alert_status_alarmas_80.threshold = 129;
    alert_status_alarmas_80.normalConditionType = conditionType.notEqual;
    alert_status_alarmas_80.normalThreshold = 129;
    alert_status_alarmas_80.severity = alarmSeverity.high;
    alert_status_alarmas_80.notificationEmails = mailsSeverityHigh;
    alert_status_alarmas_80.emailTemplates = alertsMailHighTemplatesAux;
    alert_status_alarmas_80.notificationSmsNumbers = smsNumbers;
    alert_status_alarmas_80.smsTemplates = { "openTemplate": "A new alert has been issued for: {CLIENT_NAME}.\n For the device: {DEVICE_NAME}.\n Alert Description: LEVEL SEN. FAILS!\n Details:  Please check the sensor connection on the level sensor", "closeTemplate": "An alert has ended for: {CLIENT_NAME}.\n Device: {DEVICE_NAME}.\n Alert Description: LEVEL SEN. FAILS!\n Details: -" };
    //--------------------



}

function validateDeviceAddress(address, result) {

}

function updateDeviceUIRules(device, rules) {
    rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules) {
    //rules.canDelete = true;
    // rules.canEditSubType = (endpoint.address == "2");
}