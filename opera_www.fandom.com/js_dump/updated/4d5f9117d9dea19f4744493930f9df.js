!(function (w, d, p, u, a, t) {
    "use strict";

    const T0 = 1 * new Date();
    const K_TTL = 'au_seg_ttl';
    const K_DATA = 'au_seg_data';
    const AU_SEG = {'segments': ['AU_AUD_J5FPSG', 'AU_AUD_4VL3DN', 'AU_AUD_8W289Q', 'AU_AUD_0FTW2H', 'AU_AUD_949GXW', 'AU_AUD_WFCGH1', 'AU_AUD_5Y500I', 'AU_SEG_STREAMER_3', 'AU_AUD_19BO35', 'AU_AUD_53QWXF', 'AU_AUD_PJFILI', 'AU_AUD_2HA2X2', 'AU_AUD_PLYHR0', 'AU_AUD_BIVU6L', 'AU_AUD_6NJT7I', 'AU_AUD_FZBGST', 'AU_AUD_YK9RW1', 'AU_AUD_FFT10N', 'AU_AUD_DKNZAB', 'AU_AUD_6M91NA', 'AU_AUD_OJWO2Q', 'AU_AUD_TONTGW', 'AU_AUD_1VWO53', 'AU_AUD_TL72G1', 'AU_AUD_NI5YXA', 'AU_AUD_CQK80A', 'AU_AUD_93OFGT', 'AU_AUD_BE35YZ', 'AU_AUD_9ALLJC', 'AU_AUD_VU6W7C', 'AU_AUD_VMQ5V7', 'AU_AUD_PP69CH', 'AU_AUD_70JD11', 'AU_AUD_W0GJDU', 'AU_AUD_XQI38Q', 'AU_AUD_U26JMM', 'AU_AUD_SFPF1U', 'AU_AUD_BN8X4Q', 'AU_AUD_QYJNIC', 'AU_AUD_DHA03E', 'AU_AUD_JDXW4X', 'AU_AUD_KST5U8', 'AU_AUD_SCC9O9', 'AU_AUD_JU3H92', 'AU_AUD_93EEMO', 'AU_AUD_IDPX1Q', 'AU_AUD_ARWN2O', 'AU_AUD_8S8HJN', 'AU_SEG_AGE_18-24', 'AU_AUD_QZA27X', 'AU_AUD_NGMSU1', 'AU_AUD_20BX7Z', 'AU_AUD_5GB1JX', 'AU_AUD_KBMF0V', 'AU_AUD_17BHPU', 'AU_AUD_ZMKQK7', 'AU_AUD_8H6O2I', 'AU_AUD_LM3B4Z', 'AU_AUD_JFRDR1', 'AU_AUD_WKWXZ5', 'AU_AUD_UB6ZHG', 'AU_AUD_U5MJGF', 'AU_AUD_U6JQZL', 'AU_AUD_ULEQRT', 'AU_AUD_764W9L', 'AU_AUD_WJYLWE', 'AU_AUD_HFLMVK', 'AU_AUD_EMIMA7', 'AU_AUD_HCPOAX', 'AU_AUD_MJJ91R', 'AU_AUD_UVYYWZ', 'AU_AUD_GE2SIK', 'AU_AUD_ZLZT39', 'AU_AUD_8TFLYI', 'AU_AUD_MTGQDS', 'AU_AUD_8AM7OE', 'AU_AUD_43M6UE', 'AU_AUD_B2MRQS', 'AU_AUD_J0L7YR', 'AU_AUD_422VVP', 'AU_AUD_PYGX6N', 'AU_AUD_BZ2GUL', 'AU_SEG_GENDER_MALE', 'AU_AUD_1R8J8E', 'AU_AUD_3WQT6Z', 'AU_AUD_82IG5Z', 'AU_AUD_KUE3KR', 'AU_AUD_YGE66T', 'AU_AUD_9EPW7I', 'AU_AUD_EI2KDV', 'AU_AUD_RQ2SRD', 'AU_AUD_XVRZX5', 'AU_AUD_0TQA5U', 'AU_AUD_YYMFNQ', 'AU_AUD_LKYJU5', 'AU_AUD_NLITL0', 'AU_AUD_Y2PMM8', 'AU_AUD_KIIGTK', 'AU_AUD_M0W2CO', 'AU_AUD_PTIKF1', 'AU_AUD_2VCRGE', 'AU_AUD_PBWZO9', 'AU_AUD_14K9DK', 'AU_AUD_SGXFQV', 'AU_AUD_6N7LJ0']};

    function getTaggerId() {
        try {
            const item = localStorage.getItem('au/tid');
            if (item !== null) {
                const taggerId = JSON.parse(item);
                return taggerId['v'];
            }
            return null;
        }
        catch (err) {
            return null;
        }
    }

    function getAudigentId() {
        const fkey = '_au_1d=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; ++i) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(fkey) == 0) {
                return c.substring(fkey.length, c.length);
            }
        }
        return null;
    }

    function getCache() {
        if (typeof (Storage) !== 'undefined') {
            const ttl = parseInt(w.localStorage.getItem(K_TTL) || '0');
            if (ttl > T0) {
                return JSON.parse(w.localStorage.getItem(K_DATA));
            }
        }
        return null;
    }

    function setCache(response) {
        if (typeof (Storage) !== 'undefined' && response.segments.length > 0) {
            const t1 = T0 + (5 * 60 * 1000);

            w.localStorage.setItem(K_TTL, t1);
            w.localStorage.setItem(K_DATA, JSON.stringify(response));
        }
    }

    function responseHandler(response, withCache) {
        // default behaviour saves segments in the window context
        w.au_seg = response;

        const t2 = 1 * new Date();
        console.log('[Audigent/' + p + '] Segment Service > Response Time ' + (t2 - T0).toString() + ' millis');

        // trigger custom event to notify other libraries that the data is ready
        d.dispatchEvent(new CustomEvent('auSegReady', { 'detail': response }));

        if (withCache) {
            setCache(response);
        }
    }

    const cres = getCache();
    if (cres === null) {
        console.log('[Audigent/' + p + '] Segment Service > Cache Miss');

        responseHandler(AU_SEG, false);

        u = 'https://' + u + '/api/v1/segments?url=' + encodeURIComponent(d.location.href) + '&partner_id=' + p;
        a = getAudigentId();
        if (typeof a === 'string') {
            u = u + '&au_id=' + a;
        }
        t = getTaggerId();
        if (typeof t === 'string') {
            u = u + '&tagger_id=' + t;
        }

        const xhr = new XMLHttpRequest();
        xhr.timeout = 3000;  // 3 secs
        xhr.open('GET', u, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                const nres = JSON.parse(xhr.responseText);
                responseHandler(nres, true);
            }
        };
        xhr.ontimeout = () => {
            console.warn('[Audigent/' + p + '] Segment Service > Timeout');
        }
        xhr.onerror = () => {
            console.warn('[Audigent/' + p + '] Segment Service > Invalid Response');
        };
        xhr.send(null);
    } else {
        console.log('[Audigent/' + p + '] Segment Service > Cache Hit');

        responseHandler(cres, true);
    }
})(window, document, '158', 'seg.ad.gt');