# A Selection of Ergogen v4 Footprints

Tailormade in the fashion of today.

## Microcontrollers

* [xiao-ble.js](./xiao-ble.js) - A footprint for the [Seeedstudio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html). Uses smd pads for the standard GPIO pads. For the interior SW pins, Reset pin, Battery pins, and NFC pins, the footprint features through-hole pins. The pins intersect with small edge cut windows so that you can solder them from the underside of a PCB. (Update, Feb. 2026: Now using the KiCAD 8 footprint syntax. Should coexist with Ceoloide's footprint library.)
* [xiao-ble-kicad5.js](./xiao-ble.js) - A footprint for the [Seeedstudio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html). Same as above, but using the older KiCAD 5 footprint format in case you're working with an older build that's not leveraging `template: kicad8`.

## Accessories

* [buttonrightangle.js](./buttonrightangle.js) - An [MJTP1117](https://www.mouser.com/ProductDetail/642-MJTP1117) right angle pushbutton.
* [gbareversible.js](./gbareversible.js) - A reversible Game Boy cartridge slot footprint for all you TypePak fans out there. Based on [Martin Refseth](https://github.com/HDR)'s [Game Boy KiCad Library](https://github.com/HDR/Game-Boy-KiCad-Library).
* [spdtrightangle.js](./spdtrightangle.js) - An [EG1213](https://www.mouser.com/ProductDetail/612-EG1213) right angle power switch.

## Encoders & Friends

* [lowproro.js](./lowproro.js) - A footprint for the [SIQ-02FVS3](https://www.aliexpress.us/item/2251832621185354.html) low profile rotrary encoder.
* [lowprothumb.js](./lowprothumb.js) - A footprint for the [SLLB510100](https://www.mouser.com/ProductDetail/Alps-Alpine/SLLB510100) low profile rotating thumb switch. (Similar to the rocker switch found on 00s CD and MP3 players.)

## Mounting Holes

* [mountingholem2.js](./mountingholem2.js) -  An Ergogen version of the MountingHole_2mm_Pad_Via mounting hole. It fits an M2 screw and has one of those metal circles with several smaller circles around the paremeter.
* [mountingholem3.js](./mountingholem3.js) - An Ergogen version of the MountingHole_3mm_Pad_Via mounting hole. It fits an M3 screw and has one of those metal circles with several smaller circles around the paremeter.