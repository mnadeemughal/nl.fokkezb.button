function FontAwesome(options) {
	switch (Ti.Platform.osname) {
		case 'iphone':
		case 'ipad':
			this.fontfamily = 'FontAwesome';
			break;
		case 'android':
			this.fontfamily = 'fontawesome-webfont';
	}

	this.charcode = {
		"icon-glass": 0xf000,
		"icon-music": 0xf001,
		"icon-search": 0xf002,
		"icon-envelope": 0xf003,
		"icon-heart": 0xf004,
		"icon-star": 0xf005,
		"icon-star-empty": 0xf006,
		"icon-user": 0xf007,
		"icon-film": 0xf008,
		"icon-th-large": 0xf009,
		"icon-th": 0xf00a,
		"icon-th-list": 0xf00b,
		"icon-ok": 0xf00c,
		"icon-remove": 0xf00d,
		"icon-zoom-in": 0xf00e,
		"icon-zoom-out": 0xf010,
		"icon-off": 0xf011,
		"icon-signal": 0xf012,
		"icon-cog": 0xf013,
		"icon-trash": 0xf014,
		"icon-home": 0xf015,
		"icon-file": 0xf016,
		"icon-time": 0xf017,
		"icon-road": 0xf018,
		"icon-download-alt": 0xf019,
		"icon-download": 0xf01a,
		"icon-upload": 0xf01b,
		"icon-inbox": 0xf01c,
		"icon-play-circle": 0xf01d,
		"icon-repeat": 0xf01e,
		"icon-refresh": 0xf021,
		"icon-list-alt": 0xf022,
		"icon-lock": 0xf023,
		"icon-flag": 0xf024,
		"icon-headphones": 0xf025,
		"icon-volume-off": 0xf026,
		"icon-volume-down": 0xf027,
		"icon-volume-up": 0xf028,
		"icon-qrcode": 0xf029,
		"icon-barcode": 0xf02a,
		"icon-tag": 0xf02b,
		"icon-tags": 0xf02c,
		"icon-book": 0xf02d,
		"icon-bookmark": 0xf02e,
		"icon-print": 0xf02f,
		"icon-camera": 0xf030,
		"icon-font": 0xf031,
		"icon-bold": 0xf032,
		"icon-italic": 0xf033,
		"icon-text-height": 0xf034,
		"icon-text-width": 0xf035,
		"icon-align-left": 0xf036,
		"icon-align-center": 0xf037,
		"icon-align-right": 0xf038,
		"icon-align-justify": 0xf039,
		"icon-list": 0xf03a,
		"icon-indent-left": 0xf03b,
		"icon-indent-right": 0xf03c,
		"icon-facetime-video": 0xf03d,
		"icon-picture": 0xf03e,
		"icon-pencil": 0xf040,
		"icon-map-marker": 0xf041,
		"icon-adjust": 0xf042,
		"icon-tint": 0xf043,
		"icon-edit": 0xf044,
		"icon-share": 0xf045,
		"icon-check": 0xf046,
		"icon-move": 0xf047,
		"icon-step-backward": 0xf048,
		"icon-fast-backward": 0xf049,
		"icon-backward": 0xf04a,
		"icon-play": 0xf04b,
		"icon-pause": 0xf04c,
		"icon-stop": 0xf04d,
		"icon-forward": 0xf04e,
		"icon-fast-forward": 0xf050,
		"icon-step-forward": 0xf051,
		"icon-eject": 0xf052,
		"icon-chevron-left": 0xf053,
		"icon-chevron-right": 0xf054,
		"icon-plus-sign": 0xf055,
		"icon-minus-sign": 0xf0056,
		"icon-remove-sign": 0xf057,
		"icon-ok-sign": 0xf058,
		"icon-question-sign": 0xf059,
		"icon-info-sign": 0xf05a,
		"icon-screenshot": 0xf05b,
		"icon-remove-circle": 0xf05c,
		"icon-ok-circle": 0xf05d,
		"icon-ban-circle": 0xf05e,
		"icon-arrow-left": 0xf060,
		"icon-arrow-right": 0xf061,
		"icon-arrow-up": 0xf062,
		"icon-arrow-down": 0xf063,
		"icon-share-alt": 0xf064,
		"icon-resize-full": 0xf065,
		"icon-resize-small": 0xf066,
		"icon-plus": 0xf067,
		"icon-minus": 0xf068,
		"icon-asterisk": 0xf069,
		"icon-exclamation-sign": 0xf06a,
		"icon-gift": 0xf06b,
		"icon-leaf": 0xf06c,
		"icon-fire": 0xf06d,
		"icon-eye-open": 0xf06e,
		"icon-eye-close": 0xf070,
		"icon-warning-sign": 0xf071,
		"icon-plane": 0xf072,
		"icon-calendar": 0xf073,
		"icon-random": 0xf074,
		"icon-comment": 0xf075,
		"icon-magnet": 0xf076,
		"icon-chevron-up": 0xf077,
		"icon-chevron-down": 0xf078,
		"icon-retweet": 0xf079,
		"icon-shopping-cart": 0xf07a,
		"icon-folder-close": 0xf07b,
		"icon-folder-open": 0xf07c,
		"icon-resize-vertical": 0xf07d,
		"icon-resize-horizontal": 0xf07e,
		"icon-bar-chart": 0xf080,
		"icon-twitter-sign": 0xf081,
		"icon-facebook-sign": 0xf082,
		"icon-camera-retro": 0xf083,
		"icon-key": 0xf084,
		"icon-cogs": 0xf085,
		"icon-comments": 0xf086,
		"icon-thumbs-up": 0xf087,
		"icon-thumbs-down": 0xf088,
		"icon-star-half": 0xf089,
		"icon-heart-empty": 0xf08a,
		"icon-signout": 0xf08b,
		"icon-linkedin-sign": 0xf08c,
		"icon-pushpin": 0xf08d,
		"icon-external-link": 0xf08e,
		"icon-signin": 0xf090,
		"icon-trophy": 0xf091,
		"icon-github-sign": 0xf092,
		"icon-upload-alt": 0xf093,
		"icon-lemon": 0xf094,
		"icon-phone": 0xf095,
		"icon-check-empty": 0xf096,
		"icon-bookmark-empty": 0xf097,
		"icon-phone-sign": 0xf098,
		"icon-twitter": 0xf099,
		"icon-facebook": 0xf09a,
		"icon-github": 0xf09b,
		"icon-unlock": 0xf09c,
		"icon-credit-card": 0xf09d,
		"icon-rss": 0xf09e,
		"icon-hdd": 0xf0a0,
		"icon-bullhorn": 0xf0a1,
		"icon-bell": 0xf0a2,
		"icon-certificate": 0xf0a3,
		"icon-hand-right": 0xf0a4,
		"icon-hand-left": 0xf0a5,
		"icon-hand-up": 0xf0a6,
		"icon-hand-down": 0xf0a7,
		"icon-circle-arrow-left": 0xf0a8,
		"icon-circle-arrow-right": 0xf0a9,
		"icon-circle-arrow-up": 0xf0aa,
		"icon-circle-arrow-down": 0xf0ab,
		"icon-globe": 0xf0ac,
		"icon-wrench": 0xf0ad,
		"icon-tasks": 0xf0ae,
		"icon-filter": 0xf0b0,
		"icon-briefcase": 0xf0b1,
		"icon-fullscreen": 0xf0b2,
		"icon-group": 0xf0c0,
		"icon-link": 0xf0c1,
		"icon-cloud": 0xf0c2,
		"icon-beaker": 0xf0c3,
		"icon-cut": 0xf0c4,
		"icon-copy": 0xf0c5,
		"icon-paper-clip": 0xf0c6,
		"icon-save": 0xf0c7,
		"icon-sign-blank": 0xf0c8,
		"icon-reorder": 0xf0c9,
		"icon-list-ul": 0xf0ca,
		"icon-list-ol": 0xf0cb,
		"icon-strikethrough": 0xf0cc,
		"icon-underline": 0xf0cd,
		"icon-table": 0xf0ce,
		"icon-magic": 0xf0d0,
		"icon-truck": 0xf0d1,
		"icon-pinterest": 0xf0d2,
		"icon-pinterest-sign": 0xf0d3,
		"icon-google-plus-sign": 0xf0d4,
		"icon-google-plus": 0xf0d5,
		"icon-money": 0xf0d6,
		"icon-caret-down": 0xf0d7,
		"icon-caret-up": 0xf0d8,
		"icon-caret-left": 0xf0d9,
		"icon-caret-right": 0xf0da,
		"icon-columns": 0xf0db,
		"icon-sort": 0xf0dc,
		"icon-sort-down": 0xf0dd,
		"icon-sort-up": 0xf0de,
		"icon-envelope-alt": 0xf0e0,
		"icon-linkedin": 0xf0e1,
		"icon-undo": 0xf0e2,
		"icon-legal": 0xf0e3,
		"icon-dashboard": 0xf0e4,
		"icon-comment-alt": 0xf0e5,
		"icon-comments-alt": 0xf0e6,
		"icon-bolt": 0xf0e7,
		"icon-sitemap": 0xf0e8,
		"icon-umbrella": 0xf0e9,
		"icon-paste": 0xf0ea,
		"icon-lightbulb": 0xf0eb,
		"icon-exchange": 0xf0ec,
		"icon-cloud-download": 0xf0ed,
		"icon-cloud-upload": 0xf0ee,
		"icon-user-md": 0xf200,
		"icon-stethoscope": 0xf0f1,
		"icon-suitcase": 0xf0f2,
		"icon-bell-alt": 0xf0f3,
		"icon-coffee": 0xf0f4,
		"icon-food": 0xf0f5,
		"icon-file-alt": 0xf0f6,
		"icon-building": 0xf0f7,
		"icon-hospital": 0xf0f8,
		"icon-ambulance": 0xf0f9,
		"icon-medkit": 0xf0fa,
		"icon-fighter-jet": 0xf0fb,
		"icon-beer": 0xf0fc,
		"icon-h-sign": 0xf0fd,
		"icon-plus-sign-alt": 0xf0fe,
		"icon-double-angle-left": 0xf100,
		"icon-double-angle-right": 0xf101,
		"icon-double-angle-up": 0xf102,
		"icon-double-angle-down": 0xf103,
		"icon-angle-left": 0xf104,
		"icon-angle-right": 0xf105,
		"icon-angle-up": 0xf106,
		"icon-angle-down": 0xf107,
		"icon-desktop": 0xf108,
		"icon-laptop": 0xf109,
		"icon-tablet": 0xf10a,
		"icon-mobile-phone": 0xf10b,
		"icon-circle-blank": 0xf10c,
		"icon-quote-left": 0xf10d,
		"icon-quote-right": 0xf10e,
		"icon-spinner": 0xf110,
		"icon-circle": 0xf111,
		"icon-reply": 0xf112,
		"icon-github-alt": 0xf113,
		"icon-folder-close-alt": 0xf114,
		"icon-folder-open-alt": 0xf115
	};
}

FontAwesome.prototype.getCharcode = function(options) {
	return this.charcode[options];
};

module.exports = FontAwesome;