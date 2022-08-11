//در صورتی که حرف اخر بیت را پیدا نکرد برای پیدا کردن حرف اخر مصرع از دوتا اسپیس استفاده کنید 

console.log(poetry("چوب  چوق"))



export default function poetry(verse) {
    let result = null
    let poetrys =[
        "به لاله نرگس مخمور گفت وقت سحر  که هر که در صف باغ است صاحب هنریست",
        "جواب داد که من نیز صاحب هنرم  درین صحیفه ز من نیز نقشی و اثریست",
        "علامت خطر است این قبای خون آلود  هر آنکه در ره هستی است در ره خطریست",
        "گل از بساط چمن تنگدل نخواهد رفت  بدان دلیل که مهمان شامی و سحریست",
        "تو روی سخت قضا و قدر ندیدستی  هنوز آنچه تو را مینماید آستریست",
        "از آن، دراز نکردم سخن درین معنی  که کار زندگی لاله کار مختصریست",
        "خوش آنکه نام نکوئی بیادگار گذاشت  که عمر بی ثمر نیک، عمر بی ثمریست",
        "کسیکه در طلب نام نیک رنج کشید اگر چه نام و نشانیش نیست، ناموریست",
        "نه هر نسیم که اینجاست بر تو میگذرد  صبا صباست، به هر سبزه و گلش گذریست",
        "یکی نظر به گل افکند و دیگری بگیاه  ز خوب و زشت چه منظور؟ هر که را نظریست",
    ]

    for (const poetry of poetrys) {
        if (verse.slice(verse.length-1,verse.length) == poetry.slice(0,1)) {
            result = poetry
            break
        }else{
            const verseIndex = verse.indexOf("  ")
            if (verse.slice(verseIndex -1,verseIndex) == poetry.slice(0,1)) {
                result = poetry
                break
            }
        }
    }

    return result
}