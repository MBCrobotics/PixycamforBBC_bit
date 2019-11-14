let pixy_X_raw_ = 0;
let pixy_Y_raw_ = 0;
let pixy_W_raw_ = 0;
let pixy_H_raw_ = 0;
let pixy_rx_item_ = 0;
let pixy_rx_get_ = 0;

//% weight=0 color=#3CB371 icon="\uf03d"
/**
*1
*/
namespace Pixy_cam {
	
//% blockId="Pixy_cam_uart_setting" block="uart_setting"
//% blockGap=1 weight=10
    export function Pixy_cam_uart_setting(): void {
        serial.redirect(
		SerialPin.P14,
		SerialPin.P15,
		BaudRate.BaudRate9600
	)
	serial.setRxBufferSize(4)
    }
//% blockId="Pixy_cam_uart_ansys" block="uart_ansys"
//% blockGap=1 weight=9
    export function Pixy_cam_uart_ansys(): void {
	    pixy_rx_get_ = parseFloat(serial.readString())
	    pixy_rx_item_ = Math.trunc(pixy_rx_get_ / 1000)
	    if (pixy_rx_item_ == 1) {
		    pixy_X_raw_ = pixy_rx_get_ % 1000
	    } else if (pixy_rx_item_ == 2) {
		    pixy_Y_raw_ = pixy_rx_get_ % 1000
	    } else if (pixy_rx_item_ == 3) {
		    pixy_W_raw_ = pixy_rx_get_ % 1000
	    } else {
		    pixy_H_raw_ = pixy_rx_get_ % 1000
	    }
    }
	
//% blockId="Pixy_cam_uart_ansys_x" block="uart_ansys_x"
//% blockGap=1 weight=8
    export function Pixy_cam_uart_ansys_x(): number {
	    return pixy_X_raw_
    }

//% blockId="Pixy_cam_uart_ansys_y" block="uart_ansys_y"
//% blockGap=1 weight=7
    export function Pixy_cam_uart_ansys_y(): number {
	    return pixy_Y_raw_
    }
	
//% blockId="Pixy_cam_uart_ansys_w" block="uart_ansys_w"
//% blockGap=1 weight=6
    export function Pixy_cam_uart_ansys_w(): number {
	    return pixy_W_raw_
    }

//% blockId="Pixy_cam_uart_ansys_h" block="uart_ansys_h"
//% blockGap=1 weight=5
    export function Pixy_cam_uart_ansys_h(): number {
	    return pixy_H_raw_
    }

}
