import md5 from './pages/s-md5/md5'
import base64 from './pages/s-b64/base64'
import home from './pages/home/main.js'

export default {
    home: home(),
    base64Encode: base64(),
    md5Encode: md5(),
}