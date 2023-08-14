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

      ${'' /* interior cutouts */}
      (fp_rect (start -1.52 -8.822) (end 1.52 -5.782) (layer Edge.Cuts) (width 0.12) (fill none))

      (fp_rect (start -4.695 -2.472) (end -2.032 -0.067) (layer Edge.Cuts) (width 0.12) (fill none))

      (fp_rect (start 3.602408 6.388408) (end 5.907408 9.01408) (layer Edge.Cuts) (width 0.12) (fill none))

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