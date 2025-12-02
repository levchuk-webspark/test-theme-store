/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
window.PXUTheme.jsSlideshowClassic = {
	init: function($section) {

    // Add settings from schema to current object
    window.PXUTheme.jsSlideshowClassic = $.extend(this, window.PXUTheme.getSectionData($section));

    // Selectors
    const $slideshowClassicEl = $section.find('[data-slideshow-classic]').removeClass('is-hidden');

    const $slideshowClassic = $slideshowClassicEl.flickity({
      wrapAround: true,
      adaptiveHeight: true,
      prevNextButtons: this.number_of_slides > 1 ? this.show_arrows : false,
      pageDots: this.number_of_slides > 1 ? this.show_nav_buttons : false,
      draggable: true,
      imagesLoaded: true,
      fade: this.image_transition == 'fade' ? true : false,
      autoPlay: this.image_slideshow_speed * 1000,
      arrowShape: arrowShape,
       on: {
				ready: function() {
					console.log('Flickity ready');
		
                    if(isScreenSizeLarge()) {
                      const videosDesktop = $slideshowClassicEl.find('video.is-hidden-mobile-only');
                        if (videosDesktop.length > 0) {
    						videosDesktop[0].play();
    					}
                    } else {
                      const videosMobile = $slideshowClassicEl.find('video.is-hidden-desktop-only');
                        if (videosMobile.length > 0) {
    						videosMobile[0].play();
    					}
                    } 
				},
                 change: function(index) {
					const videosDesktop = $slideshowClassicEl.find('video.is-hidden-mobile-only');
                   const videosMobile = $slideshowClassicEl.find('video.is-hidden-desktop-only');

                    if (isScreenSizeLarge()) {
                      videosDesktop.each(function(i, video) {
						video.currentTime = 0;
						if (i === index) {
							video.play();
						} else {
							video.pause();
						}
    						video.addEventListener('ended', function() {
    							$slideshowClassic.next(true);
    						});
    					});
                    } else {
                      videosMobile.each(function(i, video) {
						video.currentTime = 0;
						if (i === index) {
							video.play();
						} else {
							video.pause();
						}
    						video.addEventListener('ended', function() {
    							$slideshowClassic.next(true);
    						});
    					});
                    }
				}
      }
    });

    // Resize flickity when the slider is settled
    $slideshowClassicEl.on( 'settle.flickity', function() {
      $slideshowClassicEl.flickity('resize');
    })

  },
  blockSelect: function($section, blockId) {
    const $slider = $section.find('[data-image-slideshow]');
    const $sliderIndex = $('#shopify-section-' + blockId).data('slide-index');

    $slider.flickity('select', $sliderIndex, true, true);

  },
	unload: function($section) {

	}
}

/******/ })()
;
