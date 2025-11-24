type FileSource = { path: string}

type DGSource = {
    fileSource?: string,
    fileName: string
}

type TotalSource = DGSource & FileSource

// Extend with interface

interface PhotoFile { WeddingFile: string, LoveingFile: string}
interface PhotoDevice { deviceName: string, DeviceVid: string}

interface Album extends PhotoDevice, PhotoFile {}