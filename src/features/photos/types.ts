//The interface names the types that a types parameters has, allowing values to be type checked.
//If a parameter is option, add a ? (ex. date?: string)

export interface Photo {
  id?: string, 
  date: string, 
  title: string,
  copyright: string,
  explanation: string,
  url: string
}