interface IAppConfig{
    url: string
}

const LocalConfig:IAppConfig = {
    url: ""
}

const DevConfig:IAppConfig = {
    url: ""
}

const AccConfig:IAppConfig = {
    url: ""
}

const ProdConfig:IAppConfig = {
    url: ""
}

const Configs:{[index: string]: IAppConfig} = {
    "local": LocalConfig,
    "dev": DevConfig,
    "acc": AccConfig,
    "prd": ProdConfig
}

const CurrentEnvironment = process.env.ENV_VARIABLE ? process.env.ENV_VARIABLE : "local";
const ConfigToExport = Configs[CurrentEnvironment];
if (!ConfigToExport) throw "Specified Environment Configuration Not Found";

export default ConfigToExport;