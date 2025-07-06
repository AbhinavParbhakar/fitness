
export type LoggingScreenNutrientsProps = {
    calories : number,
    carbs: number,
    protein: number,
    fat: number,
    name:string
}

export type OpenFoodFactsReturnType = {
    code: string,
    product?: {
        nutriments:{
            energy_value:number,
            fat_value:number,
            proteins_value:number,
            carbohydrates_value: number
        },
        product_name: string
    },
    status:number,
    status_verbose:string
}