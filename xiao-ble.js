// XIAO "BLE" nRF52840 Footprint
// Features SMD pads for main pins.
// Uses Through Hole pins and interior cutouts for Reset, Power, and NFC pins.

module.exports = {
  params: {
    designator: 'MCU',
    // Left Row
    P0: {type: 'net', value: 'P0'},
    P1: {type: 'net', value: 'P1'},
    P2: {type: 'net', value: 'P2'},
    P3: {type: 'net', value: 'P3'},
    P4: {type: 'net', value: 'P4'},
    P5: {type: 'net', value: 'P5'},
    P6: {type: 'net', value: 'P6'},

    // Right Row
    RAW5V: {type: 'net', value: 'RAW5V'},
    GND: {type: 'net', value: 'GND'},
    RAW3V3: {type: 'net', value: 'RAW3V3'},
    P10: {type: 'net', value: 'P10'},
    P9: {type: 'net', value: 'P9'},
    P8: {type: 'net', value: 'P8'},
    P7: {type: 'net', value: 'P7'},

    // Main Cutout
    SWCLK: {type: 'net', value: 'SWCLK'},
    SWDIO: {type: 'net', value: 'SWDIO'},
    // GND Again
    RST: {type: 'net', value: 'RST'},

    // Power Cutout
    BAT_POS: {type: 'net', value: 'BAT_POS'},
    BAT_NEG: {type: 'net', value: 'BAT_NEG'},

    // NFC Cutout
    NFC0: {type: 'net', value: 'NFC0'},
    NFC1: {type: 'net', value: 'NFC1'}
  },
  body: p => `
    (module XIAO-BLE (layer F.Cu) (tedit 640103B8)
      ${p.at /* parametric position */}
      
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at -19.3989 -11.28268) (layer F.SilkS) ${p.ref_hide}
        (effects (font (size 0.889 0.889) (thickness 0.1016)))
      )
      (fp_text value "xiao-ble" (at -19.8434 -0.29718) (layer F.SilkS) ${p.ref_hide}
        (effects (font (size 0.6096 0.6096) (thickness 0.0762)))
      )
      
      ${''/* component outline */}
      (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (layer Dwgs.User) (width 0.12) (fill none))
      (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (layer Dwgs.User) (width 0.12) (fill none))
      (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (layer Dwgs.User) (width 0.12) (fill none))
      (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (layer Dwgs.User) (width 0.12) (fill none))
      (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (layer Dwgs.User) (width 0.12) (fill none))

      ${'' /* top interior cutout */}
      (fp_line (start -0.8382 -8.826) (end 0.8382 -8.826) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start 1.2762 -8.5782) (end 1.524 -8.1402) (angle 148.9828048) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 1.524 -8.1402) (end 1.524 -6.4638) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start 1.2762 -6.0257) (end 0.8382 -5.778) (angle 148.9828048) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -0.8382 -5.778) (end 0.8382 -5.778) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start -1.2762 -6.0258) (end -1.524 -6.4638) (angle 148.9828349) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -1.524 -8.1402) (end -1.524 -6.4638) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start -1.2762 -8.5782) (end -0.8382 -8.826) (angle 148.9829267) (layer Edge.Cuts) (width 0.12))

      ${'' /* middle interior cutout */}
      (fp_line (start -4.0132 -2.476) (end -2.413 -2.476) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start -2.4130 -2.0950) (end -2.413 -2.476) (angle 90.00030077) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -2.032 -2.095) (end -2.032 -0.444) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start -2.4130 -0.4440) (end -2.032 -0.444) (angle 90.00030077) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -4.0132 -0.063) (end -2.413 -0.063) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start -4.4512 -0.3108) (end -4.699 -0.7488) (angle 148.9837357) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -4.699 -1.7902) (end -4.699 -0.7488) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start -4.4512 -2.2282) (end -4.0132 -2.476) (angle 148.9837357) (layer Edge.Cuts) (width 0.12))

      ${'' /* bottom interior cutout */}
      (fp_line (start 3.929408 6.388408) (end 5.580408 6.388408) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start 5.5804 6.7694) (end 5.580408 6.388408) (angle 89.99999995) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 5.961408 6.769408) (end 5.961408 8.369608) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start 5.7137 8.8077) (end 5.275608 9.055408) (angle 148.9852872) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 4.234208 9.055408) (end 5.275608 9.055408) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start 3.7962 8.8077) (end 3.548408 8.369608) (angle 148.9843563) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 3.548408 6.769408) (end 3.548408 8.369608) (layer Edge.Cuts) (width 0.12))
      (fp_arc (start 3.9294 6.7694) (end 3.548408 6.769392) (angle 90.00240617) (layer Edge.Cuts) (width 0.12))
      
      ${''/* pin definitions */}
      (pad "1" thru_hole oval (at -7.62 -7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P0.str})
      (pad "2" thru_hole oval (at -7.62 -5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P1.str})
      (pad "3" thru_hole oval (at -7.62 -2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P2.str})
      (pad "4" thru_hole oval (at -7.62 0 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P3.str})
      (pad "5" thru_hole oval (at -7.62 2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P4.str})
      (pad "6" thru_hole oval (at -7.62 5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P5.str})
      (pad "7" thru_hole oval (at -7.62 7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P6.str})
      (pad "8" thru_hole oval (at 7.62 7.62 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P7.str})
      (pad "9" thru_hole oval (at 7.62 5.08 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P8.str})
      (pad "10" thru_hole oval (at 7.62 2.54 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P9.str})
      (pad "11" thru_hole oval (at 7.62 0 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P10.str})
      (pad "12" thru_hole oval (at 7.62 -2.54 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.RAW3V3.str})
      (pad "13" thru_hole oval (at 7.62 -5.08 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "14" thru_hole oval (at 7.62 -7.62 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.RAW5V.str})

      (pad "15" thru_hole circle (at -1.27 -8.572 ${p.rot + 90}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.SWCLK.str})
      (pad "16" thru_hole circle (at 1.27 -8.572 ${p.rot + 90}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.SWDIO.str})
      (pad "17" thru_hole circle (at -1.27 -6.032 ${p.rot + 90}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "18" thru_hole circle (at 1.27 -6.032 ${p.rot + 90}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.RST.str})

      (pad "19" thru_hole circle (at -4.445 -0.317 ${p.rot + 180}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.BAT_POS.str})
      (pad "20" thru_hole circle (at -4.445 -2.222 ${p.rot + 180}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.BAT_NEG.str})

      (pad "21" thru_hole circle (at 3.802408 8.801408 ${p.rot + 270}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.NFC0.str})
      (pad "22" thru_hole circle (at 5.707408 8.801408 ${p.rot + 270}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.NFC1.str})
    )
  `
}