interface IMainPageJSON {
  welcomeBlock: ITransparentBlockData
  infoBlock: ITextBlockData
  hybridBlock1: IHybridBlockData
  hybridBlock2: IHybridBlockData
  hybridBlock3: IHybridBlockData
  hybridBlock4: IHybridBlockData
}

interface ITextBlockData {
  text: string
}

interface ITransparentBlockData {
  title: string
  description: string
}

interface IHybridBlockData extends ITextBlockData {
  img: string
}
