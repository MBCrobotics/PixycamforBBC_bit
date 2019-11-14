

//% weight=0 color=#3CB371 icon="\uf03d"
namespace Pixy_cam {
	
//% blockId="Pixy_cam_uart_setting" block="uart_setting"
//% blockGap=1 weight=1
    export function Pixy_cam_uart_setting(): void {
        serial.redirect(
		SerialPin.P14,
		SerialPin.P15,
		BaudRate.BaudRate9600
	);
	serial.setRxBufferSize(4);
    }
	
}
