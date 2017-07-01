/**
 * 静态调试区域
 * http://steamcommunity.com/sharedfiles/filedetails/?id=921617616&searchtext=
 * @author Alice
 */

;(function ($, window, document, Math, undefined) {

    'use strict';

    // AudioVisualizer插件调试区域
    //--------------------------------------------------------------------------------------------------------------


    // 模拟音频数据
    let audioSamples = new Array(128);
    for (let i = 0; i < 128; i++) {
        audioSamples[i] = i * 0.01;
    }

    //$('body').audiovisualizer({});
    //$('body').audiovisualizer('drawCanvas', audioSamples);

    // Date插件调试区域
    //--------------------------------------------------------------------------------------------------------------

    //$('body').date({});
    //$('body').date('set', 'dateStyle', 'weather');

    // Slider插件调试区域
    //--------------------------------------------------------------------------------------------------------------

    //$('body').slider({});
    //$('body').slider('addImg');

    // Particles插件调试区域
    //--------------------------------------------------------------------------------------------------------------

    //$('body').particles({});
    //$('body').particles('startParticles');

})(jQuery, window, document, Math);