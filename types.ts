
export type LoggingScreenNutrientsProps = {
    calories : number,
    carbs: number,
    protein: number,
    fat: number
}

export type OpenFoodFactsReturnType = {
    code: string,
    product: {
        nutriments?:{
            energy_value:number,
            fat_value:number,
            proteins_value:number,
            carbohydrates_value: number
        }
    },
    status:number,
    status_verbose:string
}