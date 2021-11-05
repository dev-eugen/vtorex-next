import lodash from "./lodash"
import log from "./log"
import open from "./open"

export default app => {
    app.use(open)
    app.use(log)
    app.use(lodash)
}