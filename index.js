import App from './src/App'
global.XMLHttpRequest = global.originalXMLHttpRequest ? global.originalXMLHttpRequest : global.XMLHttpRequest
global.FormData = global.originalFormData ? global.originalFormData : global.FormData
export default new App()
