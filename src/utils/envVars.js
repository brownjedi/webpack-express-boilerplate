import appRoot from 'app-root-dir'
import dotenv  from 'dotenv'

const appRootDir = appRoot.get()
dotenv.config({
	path: `${appRootDir}/.env`
})
