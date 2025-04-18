function parseUplink(device, payload) {
    let mSandModel = [
        {
            "MEASUREMENT": "ALARMS",
            "ENDPOINT_ADDRESS": "ALARMS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ALARMS"
        },
        {
            "MEASUREMENT": "A_H_HIPT3_SS1",
            "ENDPOINT_ADDRESS": "A_H_HIPT3_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_H_HIPT3_SS2",
            "ENDPOINT_ADDRESS": "A_H_HIPT3_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_H_HIPT3_SS3",
            "ENDPOINT_ADDRESS": "A_H_HIPT3_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_H_HIPT3_SS4",
            "ENDPOINT_ADDRESS": "A_H_HIPT3_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_1_FAIL",
            "ENDPOINT_ADDRESS": "A_VALVE_1_FAIL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_2_FAIL",
            "ENDPOINT_ADDRESS": "A_VALVE_2_FAIL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_3_FAIL",
            "ENDPOINT_ADDRESS": "A_VALVE_3_FAIL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_1_SS1",
            "ENDPOINT_ADDRESS": "A_VALVE_1_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_1_SS2",
            "ENDPOINT_ADDRESS": "A_VALVE_1_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_1_SS3",
            "ENDPOINT_ADDRESS": "A_VALVE_1_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_1_SS4",
            "ENDPOINT_ADDRESS": "A_VALVE_1_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_PT3_DISCONNECTED_SS1",
            "ENDPOINT_ADDRESS": "A_PT3_DISCONNECTED_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT3_DISCONNECTED_SS2",
            "ENDPOINT_ADDRESS": "A_PT3_DISCONNECTED_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT3_DISCONNECTED_SS3",
            "ENDPOINT_ADDRESS": "A_PT3_DISCONNECTED_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT3_DISCONNECTED_SS4",
            "ENDPOINT_ADDRESS": "A_PT3_DISCONNECTED_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT2_DISCONNECTED_SS1",
            "ENDPOINT_ADDRESS": "A_PT2_DISCONNECTED_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT2_DISCONNECTED_SS2",
            "ENDPOINT_ADDRESS": "A_PT2_DISCONNECTED_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT2_DISCONNECTED_SS3",
            "ENDPOINT_ADDRESS": "A_PT2_DISCONNECTED_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT2_DISCONNECTED_SS4",
            "ENDPOINT_ADDRESS": "A_PT2_DISCONNECTED_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT1_DISCONNECTED",
            "ENDPOINT_ADDRESS": "A_PT1_DISCONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_H_HIPT3_SS5",
            "ENDPOINT_ADDRESS": "A_H_HIPT3_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_H_HIPT3_SS6",
            "ENDPOINT_ADDRESS": "A_H_HIPT3_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_H_HIPT3_SS7",
            "ENDPOINT_ADDRESS": "A_H_HIPT3_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_H_HIPT3_SS8",
            "ENDPOINT_ADDRESS": "A_H_HIPT3_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_WGT1_DISCONNECTED_MW8",
            "ENDPOINT_ADDRESS": "A_WGT1_DISCONNECTED_MW8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_AP_DISCONNECTED_MMS2",
            "ENDPOINT_ADDRESS": "A_AP_DISCONNECTED_MMS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_BC_LOW_VOLTAGE_MMS2",
            "ENDPOINT_ADDRESS": "A_BC_LOW_VOLTAGE_MMS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_PB_LOW_VOLTAGE_MMS2",
            "ENDPOINT_ADDRESS": "A_PB_LOW_VOLTAGE_MMS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_AP_DISCONNECTED",
            "ENDPOINT_ADDRESS": "A_AP_DISCONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_AP_DISCONNECTED_MMS",
            "ENDPOINT_ADDRESS": "A_AP_DISCONNECTED_MMS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_AP_DISCONNECTED_MW8",
            "ENDPOINT_ADDRESS": "A_AP_DISCONNECTED_MW8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_HYDRAULIC_SYSTEM_FAIL",
            "ENDPOINT_ADDRESS": "A_HYDRAULIC_SYSTEM_FAIL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_HYDRAULIC_SYSTEM_FAIL_MMS",
            "ENDPOINT_ADDRESS": "A_HYDRAULIC_SYSTEM_FAIL_MMS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_HYDRAULIC_SYSTEM_FAIL_MW8",
            "ENDPOINT_ADDRESS": "A_HYDRAULIC_SYSTEM_FAIL_MW8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_BC_LOW_VOLTAGE",
            "ENDPOINT_ADDRESS": "A_BC_LOW_VOLTAGE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_BC_LOW_VOLTAGE_MMS",
            "ENDPOINT_ADDRESS": "A_BC_LOW_VOLTAGE_MMS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_BC_LOW_VOLTAGE_MW8",
            "ENDPOINT_ADDRESS": "A_BC_LOW_VOLTAGE_MW8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_PB_LOW_VOLTAGE",
            "ENDPOINT_ADDRESS": "A_PB_LOW_VOLTAGE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_PB_LOW_VOLTAGE_MMS",
            "ENDPOINT_ADDRESS": "A_PB_LOW_VOLTAGE_MMS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_PB_LOW_VOLTAGE_MW8",
            "ENDPOINT_ADDRESS": "A_PB_LOW_VOLTAGE_MW8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_1_SEAT_TEST_FAIL",
            "ENDPOINT_ADDRESS": "A_VALVE_1_SEAT_TEST_FAIL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_2_SEAT_TEST_FAIL",
            "ENDPOINT_ADDRESS": "A_VALVE_2_SEAT_TEST_FAIL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VENT_FAIL",
            "ENDPOINT_ADDRESS": "A_VENT_FAIL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_DUMP_SS1",
            "ENDPOINT_ADDRESS": "ACK_DUMP_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_DUMP_SS2",
            "ENDPOINT_ADDRESS": "ACK_DUMP_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_DUMP_SS3",
            "ENDPOINT_ADDRESS": "ACK_DUMP_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_DUMP_SS4",
            "ENDPOINT_ADDRESS": "ACK_DUMP_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_TEST",
            "ENDPOINT_ADDRESS": "ACK_TEST",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_STOP",
            "ENDPOINT_ADDRESS": "ACK_STOP",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_RST_ERR",
            "ENDPOINT_ADDRESS": "ACK_RST_ERR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_RST_A",
            "ENDPOINT_ADDRESS": "ACK_RST_A",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_LINE_VOLTAGE",
            "ENDPOINT_ADDRESS": "A_LINE_VOLTAGE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LINE_VOLTAGE"
        },
        {
            "MEASUREMENT": "A_LINE_VOLTAGE_MMS",
            "ENDPOINT_ADDRESS": "A_LINE_VOLTAGE_MMS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LINE_VOLTAGE"
        },
        {
            "MEASUREMENT": "A_FULL_TANK",
            "ENDPOINT_ADDRESS": "A_FULL_TANK",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "FULL-TANK"
        },
        {
            "MEASUREMENT": "S_TBD_SS1",
            "ENDPOINT_ADDRESS": "S_TBD_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_TBD_SS2",
            "ENDPOINT_ADDRESS": "S_TBD_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_TBD_SS3",
            "ENDPOINT_ADDRESS": "S_TBD_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_TBD_SS4",
            "ENDPOINT_ADDRESS": "S_TBD_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_DPT3PT2_SS1",
            "ENDPOINT_ADDRESS": "S_DPT3PT2_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_DPT3PT2_SS2",
            "ENDPOINT_ADDRESS": "S_DPT3PT2_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_DPT3PT2_SS3",
            "ENDPOINT_ADDRESS": "S_DPT3PT2_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_DPT3PT2_SS4",
            "ENDPOINT_ADDRESS": "S_DPT3PT2_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_HIPT3_SS1",
            "ENDPOINT_ADDRESS": "S_HIPT3_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_HIPT3_SS2",
            "ENDPOINT_ADDRESS": "S_HIPT3_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_HIPT3_SS3",
            "ENDPOINT_ADDRESS": "S_HIPT3_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_HIPT3_SS4",
            "ENDPOINT_ADDRESS": "S_HIPT3_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_TBD_SS5",
            "ENDPOINT_ADDRESS": "S_TBD_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_TBD_SS6",
            "ENDPOINT_ADDRESS": "S_TBD_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_TBD_SS7",
            "ENDPOINT_ADDRESS": "S_TBD_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_TBD_SS8",
            "ENDPOINT_ADDRESS": "S_TBD_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_PDC_SS1",
            "ENDPOINT_ADDRESS": "S_PDC_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_PDC_SS2",
            "ENDPOINT_ADDRESS": "S_PDC_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_PDC_SS3",
            "ENDPOINT_ADDRESS": "S_PDC_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_PDC_SS4",
            "ENDPOINT_ADDRESS": "S_PDC_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_AUTO_SEAT_TEST",
            "ENDPOINT_ADDRESS": "S_AUTO_SEAT_TEST",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "CMD_DUMP_SS1",
            "ENDPOINT_ADDRESS": "CMD_DUMP_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_DUMP_SS2",
            "ENDPOINT_ADDRESS": "CMD_DUMP_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_DUMP_SS3",
            "ENDPOINT_ADDRESS": "CMD_DUMP_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_DUMP_SS4",
            "ENDPOINT_ADDRESS": "CMD_DUMP_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_TEST",
            "ENDPOINT_ADDRESS": "CMD_TEST",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_STOP",
            "ENDPOINT_ADDRESS": "CMD_STOP",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_RST_ERR",
            "ENDPOINT_ADDRESS": "CMD_RST_ERR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_RST_DUMPS",
            "ENDPOINT_ADDRESS": "CMD_RST_DUMPS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_RST_A",
            "ENDPOINT_ADDRESS": "CMD_RST_A",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "A_VALVE_1_SS5",
            "ENDPOINT_ADDRESS": "A_VALVE_1_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_1_SS6",
            "ENDPOINT_ADDRESS": "A_VALVE_1_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_1_SS7",
            "ENDPOINT_ADDRESS": "A_VALVE_1_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_1_SS8",
            "ENDPOINT_ADDRESS": "A_VALVE_1_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_SIEVE_FAIL_MW8",
            "ENDPOINT_ADDRESS": "A_SIEVE_FAIL_MW8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT3_DISCONNECTED_SS5",
            "ENDPOINT_ADDRESS": "A_PT3_DISCONNECTED_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT3_DISCONNECTED_SS6",
            "ENDPOINT_ADDRESS": "A_PT3_DISCONNECTED_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT3_DISCONNECTED_SS7",
            "ENDPOINT_ADDRESS": "A_PT3_DISCONNECTED_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT3_DISCONNECTED_SS8",
            "ENDPOINT_ADDRESS": "A_PT3_DISCONNECTED_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT2_DISCONNECTED_SS5",
            "ENDPOINT_ADDRESS": "A_PT2_DISCONNECTED_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT2_DISCONNECTED_SS6",
            "ENDPOINT_ADDRESS": "A_PT2_DISCONNECTED_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT2_DISCONNECTED_SS7",
            "ENDPOINT_ADDRESS": "A_PT2_DISCONNECTED_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_PT2_DISCONNECTED_SS8",
            "ENDPOINT_ADDRESS": "A_PT2_DISCONNECTED_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_P1_DISCONNECTED",
            "ENDPOINT_ADDRESS": "A_P1_DISCONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "A_HYDRAULIC_SYSTEM_FAIL_MMS2",
            "ENDPOINT_ADDRESS": "A_HYDRAULIC_SYSTEM_FAIL_MMS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_VALVE_X_SEAT_TEST_FAIL",
            "ENDPOINT_ADDRESS": "A_VALVE_X_SEAT_TEST_FAIL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_DUMP_SS5",
            "ENDPOINT_ADDRESS": "ACK_DUMP_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_DUMP_SS6",
            "ENDPOINT_ADDRESS": "ACK_DUMP_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_DUMP_SS7",
            "ENDPOINT_ADDRESS": "ACK_DUMP_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "ACK_DUMP_SS8",
            "ENDPOINT_ADDRESS": "ACK_DUMP_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ON-OFF"
        },
        {
            "MEASUREMENT": "A_LINE_VOLTAGE_MW8",
            "ENDPOINT_ADDRESS": "A_LINE_VOLTAGE_MW8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LINE_VOLTAGE"
        },
        {
            "MEASUREMENT": "A_LINE_VOLTAGE_MMS2",
            "ENDPOINT_ADDRESS": "A_LINE_VOLTAGE_MMS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LINE_VOLTAGE"
        },
        {
            "MEASUREMENT": "A_FULL_TANK_MW8",
            "ENDPOINT_ADDRESS": "A_FULL_TANK_MW8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "FULL-TANK"
        },
        {
            "MEASUREMENT": "S_CONFIG_MAINT",
            "ENDPOINT_ADDRESS": "S_CONFIG_MAINT",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "YES-NO"
        },
        {
            "MEASUREMENT": "S_ENABLED_SS1",
            "ENDPOINT_ADDRESS": "S_ENABLED_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_ENABLED_SS2",
            "ENDPOINT_ADDRESS": "S_ENABLED_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_ENABLED_SS3",
            "ENDPOINT_ADDRESS": "S_ENABLED_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_ENABLED_SS4",
            "ENDPOINT_ADDRESS": "S_ENABLED_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_ENABLED_SS5",
            "ENDPOINT_ADDRESS": "S_ENABLED_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_ENABLED_SS6",
            "ENDPOINT_ADDRESS": "S_ENABLED_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_ENABLED_SS7",
            "ENDPOINT_ADDRESS": "S_ENABLED_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_ENABLED_SS8",
            "ENDPOINT_ADDRESS": "S_ENABLED_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_DPT3PT2_SS5",
            "ENDPOINT_ADDRESS": "S_DPT3PT2_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_DPT3PT2_SS6",
            "ENDPOINT_ADDRESS": "S_DPT3PT2_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_DPT3PT2_SS7",
            "ENDPOINT_ADDRESS": "S_DPT3PT2_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_DPT3PT2_SS8",
            "ENDPOINT_ADDRESS": "S_DPT3PT2_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_HIPT3_SS5",
            "ENDPOINT_ADDRESS": "S_HIPT3_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_HIPT3_SS6",
            "ENDPOINT_ADDRESS": "S_HIPT3_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_HIPT3_SS7",
            "ENDPOINT_ADDRESS": "S_HIPT3_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_HIPT3_SS8",
            "ENDPOINT_ADDRESS": "S_HIPT3_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_PDC_SS5",
            "ENDPOINT_ADDRESS": "S_PDC_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_PDC_SS6",
            "ENDPOINT_ADDRESS": "S_PDC_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_PDC_SS7",
            "ENDPOINT_ADDRESS": "S_PDC_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "S_PDC_SS8",
            "ENDPOINT_ADDRESS": "S_PDC_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "CMD_DUMP_SS5",
            "ENDPOINT_ADDRESS": "CMD_DUMP_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_DUMP_SS6",
            "ENDPOINT_ADDRESS": "CMD_DUMP_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_DUMP_SS7",
            "ENDPOINT_ADDRESS": "CMD_DUMP_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_DUMP_SS8",
            "ENDPOINT_ADDRESS": "CMD_DUMP_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "FIRMWARE",
            "ENDPOINT_ADDRESS": "FIRMWARE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "SERIAL_LSW",
            "ENDPOINT_ADDRESS": "SERIAL_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "ALTERNATIVE_USE",
            "ENDPOINT_ADDRESS": "ALTERNATIVE_USE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ALTERNATIVE_USE"
        },
        {
            "MEASUREMENT": "SSQ",
            "ENDPOINT_ADDRESS": "SSQ",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "OPMODE",
            "ENDPOINT_ADDRESS": "OPMODE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "OPMODE"
        },
        {
            "MEASUREMENT": "CURRENT_PROCESS",
            "ENDPOINT_ADDRESS": "CURRENT_PROCESS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "CURRENT_PROCESS"
        },
        {
            "MEASUREMENT": "STATUS",
            "ENDPOINT_ADDRESS": "STATUS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "STATUS"
        },
        {
            "MEASUREMENT": "DUMPS",
            "ENDPOINT_ADDRESS": "DUMPS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "ND_SSX_LSW",
            "ENDPOINT_ADDRESS": "ND_SSX_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDStoMIN"
        },
        {
            "MEASUREMENT": "ND_SS1_LSW",
            "ENDPOINT_ADDRESS": "ND_SS1_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDStoMIN"
        },
        {
            "MEASUREMENT": "ND_SS2_LSW",
            "ENDPOINT_ADDRESS": "ND_SS2_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDStoMIN"
        },
        {
            "MEASUREMENT": "ND_SS3_LSW",
            "ENDPOINT_ADDRESS": "ND_SS3_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDStoMIN"
        },
        {
            "MEASUREMENT": "ND_SS4_LSW",
            "ENDPOINT_ADDRESS": "ND_SS4_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDStoMIN"
        },
        {
            "MEASUREMENT": "PV1",
            "ENDPOINT_ADDRESS": "PV1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "PV2",
            "ENDPOINT_ADDRESS": "PV2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "CV3",
            "ENDPOINT_ADDRESS": "CV3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "PV1_SS1",
            "ENDPOINT_ADDRESS": "PV1_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "PV1_SS2",
            "ENDPOINT_ADDRESS": "PV1_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "PV1_SS3",
            "ENDPOINT_ADDRESS": "PV1_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "PV1_SS4",
            "ENDPOINT_ADDRESS": "PV1_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "SIEVE_STATUS",
            "ENDPOINT_ADDRESS": "SIEVE_STATUS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIEVE_STATUS"
        },
        {
            "MEASUREMENT": "PT3_SS1",
            "ENDPOINT_ADDRESS": "PT3_SS1",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT3_SS2",
            "ENDPOINT_ADDRESS": "PT3_SS2",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT3_SS3",
            "ENDPOINT_ADDRESS": "PT3_SS3",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT3_SS4",
            "ENDPOINT_ADDRESS": "PT3_SS4",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT2_SS1",
            "ENDPOINT_ADDRESS": "PT2_SS1",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT2_SS2",
            "ENDPOINT_ADDRESS": "PT2_SS2",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT2_SS3",
            "ENDPOINT_ADDRESS": "PT2_SS3",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT2_SS4",
            "ENDPOINT_ADDRESS": "PT2_SS4",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT3_SS5",
            "ENDPOINT_ADDRESS": "PT3_SS5",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT3_SS6",
            "ENDPOINT_ADDRESS": "PT3_SS6",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT3_SS7",
            "ENDPOINT_ADDRESS": "PT3_SS7",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT3_SS8",
            "ENDPOINT_ADDRESS": "PT3_SS8",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT1",
            "ENDPOINT_ADDRESS": "PT1",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "WGT1_MW8",
            "ENDPOINT_ADDRESS": "WGT1_MW8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "PT2_SS5",
            "ENDPOINT_ADDRESS": "PT2_SS5",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT2_SS6",
            "ENDPOINT_ADDRESS": "PT2_SS6",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT2_SS7",
            "ENDPOINT_ADDRESS": "PT2_SS7",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "PT2_SS8",
            "ENDPOINT_ADDRESS": "PT2_SS8",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "AP",
            "ENDPOINT_ADDRESS": "AP",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "AP_MMS",
            "ENDPOINT_ADDRESS": "AP_MMS",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "AP_MW8",
            "ENDPOINT_ADDRESS": "AP_MW8",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "CB",
            "ENDPOINT_ADDRESS": "CB",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "CB_MMS",
            "ENDPOINT_ADDRESS": "CB_MMS",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "CB_MW8",
            "ENDPOINT_ADDRESS": "CB_MW8",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "PB",
            "ENDPOINT_ADDRESS": "PB",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "PB_MMS",
            "ENDPOINT_ADDRESS": "PB_MMS",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "PB_MW8",
            "ENDPOINT_ADDRESS": "PB_MW8",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "CT",
            "ENDPOINT_ADDRESS": "CT",
            "URL_TYPE": "API_URL_TEMPERATURE",
            "VARIABLE_TYPE": "CELCIUS"
        },
        {
            "MEASUREMENT": "TBD_SS1",
            "ENDPOINT_ADDRESS": "TBD_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN"
        },
        {
            "MEASUREMENT": "TBD_SS2",
            "ENDPOINT_ADDRESS": "TBD_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN"
        },
        {
            "MEASUREMENT": "TBD_SS3",
            "ENDPOINT_ADDRESS": "TBD_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN"
        },
        {
            "MEASUREMENT": "TBD_SS4",
            "ENDPOINT_ADDRESS": "TBD_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN"
        },
        {
            "MEASUREMENT": "DPT3PT2_SS1",
            "ENDPOINT_ADDRESS": "DPT3PT2_SS1",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "DPT3PT2_SS2",
            "ENDPOINT_ADDRESS": "DPT3PT2_SS2",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "DPT3PT2_SS3",
            "ENDPOINT_ADDRESS": "DPT3PT2_SS3",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "DPT3PT2_SS4",
            "ENDPOINT_ADDRESS": "DPT3PT2_SS4",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "HIPT3_SS1",
            "ENDPOINT_ADDRESS": "HIPT3_SS1",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "HIPT3_SS2",
            "ENDPOINT_ADDRESS": "HIPT3_SS2",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "HIPT3_SS3",
            "ENDPOINT_ADDRESS": "HIPT3_SS3",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "HIPT3_SS4",
            "ENDPOINT_ADDRESS": "HIPT3_SS4",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "HIPT3_SS5",
            "ENDPOINT_ADDRESS": "HIPT3_SS5",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "HIPT3_SS6",
            "ENDPOINT_ADDRESS": "HIPT3_SS6",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "HIPT3_SS7",
            "ENDPOINT_ADDRESS": "HIPT3_SS7",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "HIPT3_SS8",
            "ENDPOINT_ADDRESS": "HIPT3_SS8",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "H_HIPT3_SS1",
            "ENDPOINT_ADDRESS": "H_HIPT3_SS1",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "H_HIPT3_SS2",
            "ENDPOINT_ADDRESS": "H_HIPT3_SS2",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "H_HIPT3_SS3",
            "ENDPOINT_ADDRESS": "H_HIPT3_SS3",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "H_HIPT3_SS4",
            "ENDPOINT_ADDRESS": "H_HIPT3_SS4",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "DHP_SS1",
            "ENDPOINT_ADDRESS": "DHP_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "DHP_SS2",
            "ENDPOINT_ADDRESS": "DHP_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "DHP_SS3",
            "ENDPOINT_ADDRESS": "DHP_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "DHP_SS4",
            "ENDPOINT_ADDRESS": "DHP_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "DPT1_SS1",
            "ENDPOINT_ADDRESS": "DPT1_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "DPT1_SS2",
            "ENDPOINT_ADDRESS": "DPT1_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "DPT1_SS3",
            "ENDPOINT_ADDRESS": "DPT1_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "DPT1_SS4",
            "ENDPOINT_ADDRESS": "DPT1_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "TTD_SS1",
            "ENDPOINT_ADDRESS": "TTD_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TTD_SS2",
            "ENDPOINT_ADDRESS": "TTD_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TTD_SS3",
            "ENDPOINT_ADDRESS": "TTD_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TTD_SS4",
            "ENDPOINT_ADDRESS": "TTD_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TESTSEAT",
            "ENDPOINT_ADDRESS": "TESTSEAT",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "HP_ST",
            "ENDPOINT_ADDRESS": "HP_ST",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "VT",
            "ENDPOINT_ADDRESS": "VT",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "DPT1_TEST",
            "ENDPOINT_ADDRESS": "DPT1_TEST",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "EMPTYING_TIME_MW8",
            "ENDPOINT_ADDRESS": "EMPTYING_TIME_MW8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "ND_SS5_LSW",
            "ENDPOINT_ADDRESS": "ND_SS5_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDStoMIN"
        },
        {
            "MEASUREMENT": "ND_SS6_LSW",
            "ENDPOINT_ADDRESS": "ND_SS6_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDStoMIN"
        },
        {
            "MEASUREMENT": "ND_SS7_LSW",
            "ENDPOINT_ADDRESS": "ND_SS7_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDStoMIN"
        },
        {
            "MEASUREMENT": "ND_SS8_LSW",
            "ENDPOINT_ADDRESS": "ND_SS8_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDStoMIN"
        },
        {
            "MEASUREMENT": "PV1_SS5",
            "ENDPOINT_ADDRESS": "PV1_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "PV1_SS6",
            "ENDPOINT_ADDRESS": "PV1_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "PV1_SS7",
            "ENDPOINT_ADDRESS": "PV1_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "PV1_SS8",
            "ENDPOINT_ADDRESS": "PV1_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "P1",
            "ENDPOINT_ADDRESS": "P1",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "AP_MMS2",
            "ENDPOINT_ADDRESS": "AP_MMS2",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "CB_MMS2",
            "ENDPOINT_ADDRESS": "CB_MMS2",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "PB_MMS2",
            "ENDPOINT_ADDRESS": "PB_MMS2",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "LTOT_LSW",
            "ENDPOINT_ADDRESS": "LTOT_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "UNIX"
        },
        {
            "MEASUREMENT": "TR",
            "ENDPOINT_ADDRESS": "TR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "P1PT1IV",
            "ENDPOINT_ADDRESS": "P1PT1IV",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "LWOT_SS1_LSW",
            "ENDPOINT_ADDRESS": "LWOT_SS1_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "UNIX"
        },
        {
            "MEASUREMENT": "TW_SS1",
            "ENDPOINT_ADDRESS": "TW_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "IW_SS1",
            "ENDPOINT_ADDRESS": "IW_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "DW_SS1",
            "ENDPOINT_ADDRESS": "DW_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "LWOT_SS2_LSW",
            "ENDPOINT_ADDRESS": "LWOT_SS2_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "UNIX"
        },
        {
            "MEASUREMENT": "TW_SS2",
            "ENDPOINT_ADDRESS": "TW_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "IW_SS2",
            "ENDPOINT_ADDRESS": "IW_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "DW_SS2",
            "ENDPOINT_ADDRESS": "DW_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "LWOT_SS3_LSW",
            "ENDPOINT_ADDRESS": "LWOT_SS3_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "UNIX"
        },
        {
            "MEASUREMENT": "TW_SS3",
            "ENDPOINT_ADDRESS": "TW_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "IW_SS3",
            "ENDPOINT_ADDRESS": "IW_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "DW_SS3",
            "ENDPOINT_ADDRESS": "DW_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "LWOT_SS4_LSW",
            "ENDPOINT_ADDRESS": "LWOT_SS4_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "UNIX"
        },
        {
            "MEASUREMENT": "TW_SS4",
            "ENDPOINT_ADDRESS": "TW_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "IW_SS4",
            "ENDPOINT_ADDRESS": "IW_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "DW_SS4",
            "ENDPOINT_ADDRESS": "DW_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "LWOT_SS5_LSW",
            "ENDPOINT_ADDRESS": "LWOT_SS5_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "UNIX"
        },
        {
            "MEASUREMENT": "TW_SS5",
            "ENDPOINT_ADDRESS": "TW_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "IW_SS5",
            "ENDPOINT_ADDRESS": "IW_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "DW_SS5",
            "ENDPOINT_ADDRESS": "DW_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "LWOT_SS6_LSW",
            "ENDPOINT_ADDRESS": "LWOT_SS6_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "UNIX"
        },
        {
            "MEASUREMENT": "TW_SS6",
            "ENDPOINT_ADDRESS": "TW_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "IW_SS6",
            "ENDPOINT_ADDRESS": "IW_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "DW_SS6",
            "ENDPOINT_ADDRESS": "DW_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "LWOT_SS7_LSW",
            "ENDPOINT_ADDRESS": "LWOT_SS7_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "UNIX"
        },
        {
            "MEASUREMENT": "TW_SS7",
            "ENDPOINT_ADDRESS": "TW_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "IW_SS7",
            "ENDPOINT_ADDRESS": "IW_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "DW_SS7",
            "ENDPOINT_ADDRESS": "DW_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "LWOT_SS8_LSW",
            "ENDPOINT_ADDRESS": "LWOT_SS8_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "UNIX"
        },
        {
            "MEASUREMENT": "TW_SS8",
            "ENDPOINT_ADDRESS": "TW_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "IW_SS8",
            "ENDPOINT_ADDRESS": "IW_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "DW_SS8",
            "ENDPOINT_ADDRESS": "DW_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "TBD_SS5",
            "ENDPOINT_ADDRESS": "TBD_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN"
        },
        {
            "MEASUREMENT": "TBD_SS6",
            "ENDPOINT_ADDRESS": "TBD_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN"
        },
        {
            "MEASUREMENT": "TBD_SS7",
            "ENDPOINT_ADDRESS": "TBD_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN"
        },
        {
            "MEASUREMENT": "TBD_SS8",
            "ENDPOINT_ADDRESS": "TBD_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN"
        },
        {
            "MEASUREMENT": "DPT3PT2_SS5",
            "ENDPOINT_ADDRESS": "DPT3PT2_SS5",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "DPT3PT2_SS6",
            "ENDPOINT_ADDRESS": "DPT3PT2_SS6",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "DPT3PT2_SS7",
            "ENDPOINT_ADDRESS": "DPT3PT2_SS7",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "DPT3PT2_SS8",
            "ENDPOINT_ADDRESS": "DPT3PT2_SS8",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "H_HIPT3_SS5",
            "ENDPOINT_ADDRESS": "H_HIPT3_SS5",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "H_HIPT3_SS6",
            "ENDPOINT_ADDRESS": "H_HIPT3_SS6",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "H_HIPT3_SS7",
            "ENDPOINT_ADDRESS": "H_HIPT3_SS7",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "H_HIPT3_SS8",
            "ENDPOINT_ADDRESS": "H_HIPT3_SS8",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "DHP_SS5",
            "ENDPOINT_ADDRESS": "DHP_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "DHP_SS6",
            "ENDPOINT_ADDRESS": "DHP_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "DHP_SS7",
            "ENDPOINT_ADDRESS": "DHP_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "DHP_SS8",
            "ENDPOINT_ADDRESS": "DHP_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "DPT1_SS5",
            "ENDPOINT_ADDRESS": "DPT1_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "DPT1_SS6",
            "ENDPOINT_ADDRESS": "DPT1_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "DPT1_SS7",
            "ENDPOINT_ADDRESS": "DPT1_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "DPT1_SS8",
            "ENDPOINT_ADDRESS": "DPT1_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "TTD_SS5",
            "ENDPOINT_ADDRESS": "TTD_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TTD_SS6",
            "ENDPOINT_ADDRESS": "TTD_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TTD_SS7",
            "ENDPOINT_ADDRESS": "TTD_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TTD_SS8",
            "ENDPOINT_ADDRESS": "TTD_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "STATUS_ALARMAS",
            "ENDPOINT_ADDRESS": "STATUS_ALARMAS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "STATUS_ALARMS"
        },
        {
            "MEASUREMENT": "VC_DUMP",
            "ENDPOINT_ADDRESS": "VC_DUMP",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_SS1",
            "ENDPOINT_ADDRESS": "VC_DUMP_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_SS2",
            "ENDPOINT_ADDRESS": "VC_DUMP_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_SS3",
            "ENDPOINT_ADDRESS": "VC_DUMP_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_SS4",
            "ENDPOINT_ADDRESS": "VC_DUMP_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_SS5",
            "ENDPOINT_ADDRESS": "VC_DUMP_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_SS6",
            "ENDPOINT_ADDRESS": "VC_DUMP_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_SS7",
            "ENDPOINT_ADDRESS": "VC_DUMP_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_SS8",
            "ENDPOINT_ADDRESS": "VC_DUMP_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "HIS_DW_SS1",
            "ENDPOINT_ADDRESS": "HIS_DW_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "HIS_DW_SS2",
            "ENDPOINT_ADDRESS": "HIS_DW_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "HIS_DW_SS3",
            "ENDPOINT_ADDRESS": "HIS_DW_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "HIS_DW_SS4",
            "ENDPOINT_ADDRESS": "HIS_DW_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "HIS_DW_SS5",
            "ENDPOINT_ADDRESS": "HIS_DW_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "HIS_DW_SS6",
            "ENDPOINT_ADDRESS": "HIS_DW_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "HIS_DW_SS7",
            "ENDPOINT_ADDRESS": "HIS_DW_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "HIS_DW_SS8",
            "ENDPOINT_ADDRESS": "HIS_DW_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "TANK_LEVEL",
            "ENDPOINT_ADDRESS": "TANK_LEVEL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "485_HEALTH",
            "ENDPOINT_ADDRESS": "485_HEALTH",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "485_STATUS",
            "ENDPOINT_ADDRESS": "485_STATUS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "BUS_STATUS"
        },
        {
            "MEASUREMENT": "485_E_CUR_HR",
            "ENDPOINT_ADDRESS": "485_E_CUR_HR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "485_CE_CUR_HR",
            "ENDPOINT_ADDRESS": "485_CE_CUR_HR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "485_E_PRE_HR",
            "ENDPOINT_ADDRESS": "485_E_PRE_HR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "485_CE_PRE_HR",
            "ENDPOINT_ADDRESS": "485_CE_PRE_HR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "485_E_DAY",
            "ENDPOINT_ADDRESS": "485_E_DAY",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "485_CE_DAY",
            "ENDPOINT_ADDRESS": "485_CE_DAY",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "VC_OP_HIS_DW_SS1",
            "ENDPOINT_ADDRESS": "VC_OP_HIS_DW_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_OP_HIS_DW_SS2",
            "ENDPOINT_ADDRESS": "VC_OP_HIS_DW_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_OP_HIS_DW_SS3",
            "ENDPOINT_ADDRESS": "VC_OP_HIS_DW_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_OP_HIS_DW_SS4",
            "ENDPOINT_ADDRESS": "VC_OP_HIS_DW_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_OP_HIS_DW_SS5",
            "ENDPOINT_ADDRESS": "VC_OP_HIS_DW_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_OP_HIS_DW_SS6",
            "ENDPOINT_ADDRESS": "VC_OP_HIS_DW_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_OP_HIS_DW_SS7",
            "ENDPOINT_ADDRESS": "VC_OP_HIS_DW_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_OP_HIS_DW_SS8",
            "ENDPOINT_ADDRESS": "VC_OP_HIS_DW_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_DW_HISTORY_OP",
            "ENDPOINT_ADDRESS": "VC_DW_HISTORY_OP",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_DUMP_OP",
            "ENDPOINT_ADDRESS": "VC_DUMP_OP",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_OP_ACUM",
            "ENDPOINT_ADDRESS": "VC_DUMP_OP_ACUM",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_OP_DAYS",
            "ENDPOINT_ADDRESS": "VC_OP_DAYS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "VC_DUMP_OP_SS1",
            "ENDPOINT_ADDRESS": "VC_DUMP_OP_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_OP_SS2",
            "ENDPOINT_ADDRESS": "VC_DUMP_OP_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_OP_SS3",
            "ENDPOINT_ADDRESS": "VC_DUMP_OP_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_OP_SS4",
            "ENDPOINT_ADDRESS": "VC_DUMP_OP_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_OP_SS5",
            "ENDPOINT_ADDRESS": "VC_DUMP_OP_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_OP_SS6",
            "ENDPOINT_ADDRESS": "VC_DUMP_OP_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_OP_SS7",
            "ENDPOINT_ADDRESS": "VC_DUMP_OP_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_DUMP_OP_SS8",
            "ENDPOINT_ADDRESS": "VC_DUMP_OP_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DUMPS"
        },
        {
            "MEASUREMENT": "VC_YD_DW_SS1",
            "ENDPOINT_ADDRESS": "VC_YD_DW_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_YD_DW_SS2",
            "ENDPOINT_ADDRESS": "VC_YD_DW_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_YD_DW_SS3",
            "ENDPOINT_ADDRESS": "VC_YD_DW_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_YD_DW_SS4",
            "ENDPOINT_ADDRESS": "VC_YD_DW_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_YD_DW_SS5",
            "ENDPOINT_ADDRESS": "VC_YD_DW_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_YD_DW_SS6",
            "ENDPOINT_ADDRESS": "VC_YD_DW_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_YD_DW_SS7",
            "ENDPOINT_ADDRESS": "VC_YD_DW_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_YD_DW_SS8",
            "ENDPOINT_ADDRESS": "VC_YD_DW_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "VC_TOTAL_DW_OP",
            "ENDPOINT_ADDRESS": "VC_TOTAL_DW_OP",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LBS"
        },
        {
            "MEASUREMENT": "PT1_1ST",
            "ENDPOINT_ADDRESS": "PT1_1ST",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "PT1_LFT",
            "ENDPOINT_ADDRESS": "PT1_LFT",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "TS_SS1",
            "ENDPOINT_ADDRESS": "TS_SS1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TS_SS2",
            "ENDPOINT_ADDRESS": "TS_SS2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TS_SS3",
            "ENDPOINT_ADDRESS": "TS_SS3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TS_SS4",
            "ENDPOINT_ADDRESS": "TS_SS4",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TS_SS5",
            "ENDPOINT_ADDRESS": "TS_SS5",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TS_SS6",
            "ENDPOINT_ADDRESS": "TS_SS6",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TS_SS7",
            "ENDPOINT_ADDRESS": "TS_SS7",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "TS_SS8",
            "ENDPOINT_ADDRESS": "TS_SS8",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-SECONDS"
        },
        {
            "MEASUREMENT": "RIG_MODE",
            "ENDPOINT_ADDRESS": "RIG_MODE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "RIG_MODE"
        },
        {
            "MEASUREMENT": "ACL1",
            "ENDPOINT_ADDRESS": "ACL1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "WATT"
        },
        {
            "MEASUREMENT": "ACL2",
            "ENDPOINT_ADDRESS": "ACL2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "WATT"
        },
        {
            "MEASUREMENT": "ACL3",
            "ENDPOINT_ADDRESS": "ACL3",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "WATT"
        },
        {
            "MEASUREMENT": "STATE",
            "ENDPOINT_ADDRESS": "STATE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "PV_CHARGER",
            "ENDPOINT_ADDRESS": "PV_CHARGER",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "WATT"
        },
        {
            "MEASUREMENT": "AC_INPUT",
            "ENDPOINT_ADDRESS": "AC_INPUT",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VA"
        }
    ];
    let dataJSON = payload.asJsonObject();
    let contador = 0;

    let currentUnixDate = Date.parse(new Date());
    //let timeUTC = new Date(dataJSON.ts).toUTCString();

    function parseaValor(measure, urlType, variableType) {
        if (urlType == "API_URL_PRESSURE") {
            if (variableType == "PSI") measure = measure * 6894.757;
            if (variableType == "hPa") measure = measure * 100;

            return parseFloat(measure);
        }

        if (urlType == "API_URL_TEMPERATURE") {

            return parseFloat(measure);
        }

        if (urlType == "API_URL_GENERIC") {
            if (variableType == "TIME-MIN") measure = measure;
            if (variableType == "TIME-HOUR") measure = measure * 3600;
            if (variableType == "TIME-MIN-CUSTOM") measure = (measure / 60).toFixed(2);
            if (variableType == "TIME-SECONDStoMIN") measure = Math.round(measure / 60);
            if (variableType == "MMSCFD") measure = (measure * 1177.17).toFixed(2);
            if (variableType == "BBL/DAY")
                measure = (measure * 0.006624470622).toFixed(2);
            if (variableType == "cm/s") measure = (measure * 0.036).toFixed(2);
            if (variableType == "LEVEL-MM/100") measure = measure * 100;
            if (
                variableType == "COEFFICIENT" ||
                variableType == "FLOAT" ||
                variableType == "SCF/STB" ||
                variableType == "SPECIFIC-HEAT"
            )
                measure = (measure * 1.0).toFixed(3);

            return parseFloat(measure);
        }

        if (urlType == "API_URL_HUMIDITY") {

            return parseFloat(measure);
        }

        if (urlType == "API_URL_VOLTAGE") {
            measure = measure * 0.1;

            return parseFloat(measure);
        }

        if (urlType == "API_URL_WEIGHT") {

            if (variableType == "LBS") measure = measure * 453.592;

            return parseFloat(measure);
        }
        return measure;
    };
    const parseaSiEsLSW = (measurement, measure) => {
        let last3letters = measurement.slice(-3);
        let firstLetters = measurement.slice(0, -3);
        let mSWvalue = "",
            valorCompleto = "";
        if (last3letters == "LSW") {
            let mSWmeasurement = firstLetters + "MSW";
            try {
                mSWvalue = dataJSON.params[mSWmeasurement];
            } catch (error) {
                env.log("parseaSiEsLSW: " + error);
            }
            if (!!mSWvalue) {
                // valorCompletoBinario =
                //     parseInt(mSWvalue).toString(2) +
                //     parseInt(measure).toString(2);
                // valorCompleto = parseInt(valorCompletoBinario, 2);

                valorCompletoBinario =
                    parseInt(mSWvalue).toString() +
                    parseInt(measure).toString();
                valorCompleto = parseInt(valorCompletoBinario);

                env.log(`---------------Valor LSW: ${measure} - valor completo: ${valorCompleto}`)
                return valorCompleto;
            } else return measure;
        } else return measure;
    };

    for (const property in dataJSON.params) {
        env.log(`${property}: ${dataJSON.params[property]}`);


        let sensor = device.endpoints.byAddress(property);

        if (sensor != null && dataJSON.params[property] != 65535) {
            let meassureInfo = mSandModel.find(
                (item) => property == item.MEASUREMENT
            );

            if (meassureInfo) {

                measure = parseaSiEsLSW(property, dataJSON.params[property]);

                let sensorValue = parseaValor(
                    parseFloat(measure),
                    meassureInfo.URL_TYPE,
                    meassureInfo.VARIABLE_TYPE
                );

                if (sensorValue == NaN) env.log("Valore del sensor: NaN");

                if (sensorValue != "NaN") {
                    sensorValue = parseFloat(sensorValue);

                    if (property.slice(0, -1) == "HIS_DW_SS") {
                        sensor.updateGenericSensorStatus(sensorValue);
                        //device.endpoints.byAddress(property + "_timestamp").updateGenericSensorStatus( ts del json de nico);
                    }

                    switch (meassureInfo.URL_TYPE) {
                        case "API_URL_PRESSURE":
                            //env.log("actualiza sensor de presion");
                            contador++;
                            sensor.updatePressureSensorStatus(sensorValue); //, timeUTC);
                            break;

                        case "API_URL_TEMPERATURE":
                            //env.log("actualiza sensor de temperatura");
                            contador++;
                            sensor.updateTemperatureSensorStatus(sensorValue);//, timeUTC);
                            break;



                        case "API_URL_GENERIC":
                            //env.log("actualiza sensor generico");

                            if (property == "STATUS") {
                                try {
                                    if (dataJSON.params["RIG_MODE"] == 2) {
                                        device.endpoints.byAddress("STATUS_ALARMAS").updateGenericSensorStatus(sensorValue); 
                                        contador++;
                                    }
                                } catch {

                                    try {
                                        device.endpoints.byAddress("STATUS_ALARMAS").updateGenericSensorStatus(sensorValue); 
                                        contador++;
                                    } catch {
                                        env.log("Error al actualizar: 'STATUS_ALARMAS'");
                                    }
                                }

                            }
                            contador++;
                            sensor.updateGenericSensorStatus(sensorValue);//, timeUTC);

                            break;

                        case "API_URL_HUMIDITY":
                            //env.log("actualiza sensor de humedad");
                            sensor.updateHumiditySensorStatus(sensorValue);//, timeUTC);
                            break;

                        case "API_URL_VOLTAGE":
                            //env.log("actualiza sensor de voltage");
                            contador++;
                            sensor.updateVoltageSensorStatus(sensorValue);//, timeUTC);
                            break;

                        case "API_URL_WEIGHT":
                            //env.log("actualiza sensor de peso");
                            contador++;
                            sensor.updateWeightSensorStatus(sensorValue);//, timeUTC);
                            break;

                        default:
                            env.log("no actualiza: " + meassureInfo.URL_TYPE);
                            break;
                    }

                }
            }
        }

    }


    try {
        let firmwareVersion = dataJSON.params.FIRMWARE;
        if (firmwareVersion != false) {
            firmwareVersion = (firmwareVersion / 100).toString();
            device.updateDeviceFirmwareVersion(firmwareVersion);
        }
    } catch { }

    try {
        if (contador > 0) {
            device.endpoints.byAddress("LAST_ONLINE_TIME").updateGenericSensorStatus(currentUnixDate / 1000)
        }
    } catch {
        env.log("no se encontró endpoint 'LAST_ONLINE_TIME'");
    }
    env.log(contador);

    if (contador == 0) device.endpoints.byAddress("LAST_ONLINE_TIME").updateGenericSensorStatus(currentUnixDate / 1000, "error");

}

function buildDownlink(device, endpoint, command, payload) {
    payload.buildResult = downlinkBuildResult.ok;



    //reemplazar las variables por los datos enviados por el metodo downlink
    let address = endpoint.address;
    let value = command.management.setValue.newValue;

    let condicion1 = address == "DPT1_TEST";
    let condicion2 = address.slice(0, -1) == "DPT1_SS";
    let condicion3 = address == "TESTSEAT";
    let condicion4 = address == "VT";
    let condicion5 = address.slice(0, -1) == "DHP_SS";
    let condicion6 = address.slice(0, -1) == "TBD_SS";
    let condicion7 = address.slice(0, -1) == "HIPT3_SS";
    let condicion8 = address.slice(0, -1) == "H_HIPT3_SS";
    let condicion9 = address.slice(0, -1) == "TTD_SS";
    let condicion10 = address.slice(0, -1) == "DPT3PT2_SS";
    let condicion11 = address.slice(0, -1) == "S_ENABLED_SS";
    let condicion12 = address == "S_AUTO_SEAT_TEST";
    let condicion13 = address.slice(0, -1) == "S_TBD_SS";
    let condicion14 = address.slice(0, -1) == "S_HIPT3_SS";
    let condicion15 = address.slice(0, -1) == "S_PDC_SS";
    let condicion16 = address.slice(0, -1) == "TTD_SS";

    //valido datos
    if ((condicion1 || condicion2) && (value < 0 || value > 100)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-100).", es: "Valor ingresado fuera del rango (0-100)." };
    }
    if ((condicion3) && (value < 1 || value > 100)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (1-100).", es: "Valor ingresado fuera del rango (1-100)." };
    }
    if ((condicion4) && (value < 1 || value > 120)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (1-120).", es: "Valor ingresado fuera del rango (1-120)." };
    }
    if ((condicion5) && (value < 1 || value > 60)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (1-60).", es: "Valor ingresado fuera del rango (1-60)." };
    }
    if ((condicion6) && (value < 5 || value > 10000)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (5-10000).", es: "Valor ingresado fuera del rango (5-10000)." };
    }
    if ((condicion7 || condicion8) && (value < 5 || value > 15000)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (5-15000).", es: "Valor ingresado fuera del rango (5-15000)." };
    }
    if ((condicion9) && (value < 5 || value > 3600)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (5-3600).", es: "Valor ingresado fuera del rango (5-3600)." };
    }
    if ((condicion10) && (value < 5 || value > 5000)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (5-5000).", es: "Valor ingresado fuera del rango (5-5000)." };
    }
    if ((condicion11 || condicion12 || condicion13 || condicion14 || condicion15 || condicion16) && (value < 0 || value > 1)) payload.buildResult = downlinkBuildResult.unsupported;

    if ((address == 'TANK_LEVEL') && (value < 1 || value > 100)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (1-100).", es: "Valor ingresado fuera del rango (1-100)." };
    }

    //genero el payload MQTT par el telecomando
    var obj = `{
                        "method":"sendTelemeter",
                        "params":{
                            "$__ENDPOINT": $__VALUE
                        }
                        }`;

    //reemplazo los valores de endpoint y valor 
    obj = obj.replace("$__ENDPOINT", address);
    obj = obj.replace("$__VALUE", value);

    //convierto obj a JSON
    var jsonAsString = JSON.parse(obj);

    payload.setAsJsonObject(jsonAsString);

    switch (command.type) {
        case commandType.management:
            switch (command.management.type) {
                case managementCommandType.setValue:

                    //payload.setAsJsonObject({ "entro": 5 });
                    payload.setAsJsonObject(jsonAsString);
                    break;

                default:
                    //payload.setAsJsonObject({ "entro": "default" });
                    payload.buildResult = downlinkBuildResult.unsupported;
                    break;
            }
            break;
        default:
            //payload.setAsJsonObject({ "entro": "no entro a command.type: " + command.type + " - " + command.management.type });
            payload.buildResult = downlinkBuildResult.unsupported;
            break;
    }

}