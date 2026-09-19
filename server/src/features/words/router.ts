import {Router} from 'express'
import {translationsDb} from "../translations/index.ts";
import {db} from './db.ts'

export const router = Router()

// router.get('/words', (req, res) => {
// 	const result =
//
// })

router.post('/words', (req, res) => {
    const {translations, ...word} = req.body

    const wordResult = db.insert(word)


    const translationResult = translationsDb.insert(translations)

    return {...translationResult, ...wordResult}
})




