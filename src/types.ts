

export enum weather{
    sunny= 'sunny',
    rainy= 'rainy',
    cloudy= 'cloudy',
    windy= 'windy',
    stormy= 'stormy'
}

export enum visibility{
    great= 'great',
    good= 'good',
    ok= 'ok',
    poor= ' poor'

}




export interface DiaryEntry{
    id: number,
    date: string,
    weather: weather,
    visibility: visibility,
    comment: string

}

//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type newDiaryEntry = Omit<DiaryEntry, 'id'>
