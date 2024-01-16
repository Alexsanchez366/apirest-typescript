import { newDiaryEntry, visibility, weather } from "./types";

const parseComment = (CommentFromRequest: any): string => {
    if (!isString( CommentFromRequest)){
        throw new Error('Incorrect or missing comment');
        
    }
    return CommentFromRequest
} 

const parseDate = (dateFromRequest: any): string => {
    if (!isString( dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Incorrect or missing date');
        
    }
    return dateFromRequest
} 

const parseWeather =(weatherFromRequest: any): weather =>{
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error('incorrecto or missing weather')
    }
    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): visibility =>{
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error('incorrect or missing visibility')
    }
    return visibilityFromRequest
}




const isWeather = (param: any): boolean =>{
    return Object.values(weather).includes(param)
}


const isString = (string: string): boolean => {
return typeof string === 'string'
}

const isDate = (date: string): boolean =>{
    return Boolean(Date.parse(date))
}

const isVisibility = (param: any): boolean => {
    return Object.values(visibility).includes(param)
}

const toNewDiaryEntry= (object: any): newDiaryEntry =>{
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility:parseVisibility(object.visibility)
    }

    return newEntry

}


export default toNewDiaryEntry