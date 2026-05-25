jQuery(function($){
    const numbSelectorZip = '.wpcf7 input[type="number"]';
	const textSelector   = '.wpcf7 input[type="text"]';
	const emailSelector  = '.wpcf7 input[type="email"]';
	const numbSelector   = '.wpcf7 input[type="tel"]';
	// TEXT ONLY (alphabets + single space, no leading space)
    $(document).on('input', textSelector, function(){
        this.value = this.value
            .replace(/[^a-zA-Z ]+/g, '')  // Remove non alphabets
            .replace(/\s{2,}/g, ' ')      // Single space only
            .replace(/^\s+/g, '');        // No leading space
    });
    // NUMBER ONLY (digits only)
    $(document).on('input', numbSelectorZip, function () {
        this.value = this.value.replace(/\D+/g, '').slice(0, 5);
    });	
	// EMAIL FIELD NO LEADING SPACE VALIDATION.
	$(document).on('input', emailSelector, function(){
        this.value = this.value.replace(/\s+/g, '');
    });
	// PHONE INPUT (digits only)
    function restrictTo10Digits(el) {
        el.value = el.value.replace(/\D+/g, '').slice(0, 10);
    }
    $(document).on('input', numbSelector, function () {
        restrictTo10Digits(this);
    });
});