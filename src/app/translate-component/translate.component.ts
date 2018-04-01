
import {Component, ElementRef, Renderer} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import Speech from 'speak-tts';

@Component({
    selector: 'translator-component',
    templateUrl: './translate.component.html',
    styleUrls: ['../app.component.css']
})
export class TranslatorComponent {
    public translatedText;
    public selectOption = [
        {
            id: 1,
            label: "Russian",
            value: "ru-RU"
        }, {
            id: 2,
            label: "Spanish",
            value: "es-ES"
        }, {
            id: 3,
            label: "French",
            value: "fr-FR"
        }, {
            id: 4,
            label: "Chinese",
            value: "zh-TW"
        }, {
            id: 5,
            label: "English",
            value: "en-US"
        }
    ];
    public language;
    constructor(public element: ElementRef, public renderer: Renderer, public http: Http
    ) {
    }

    ngOnInit() {
        this.language = this.selectOption[1].value;
        Speech.init()

    }

    public translateText(text, language) {
        if (text != undefined && language != undefined) {
            var uriText = encodeURIComponent(text);
            var spokenLang=this.splitString(language);
            if (uriText != "") {
                this.http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170329T180255Z.3c18d2dc7b65d525.f23ed9a9efa992bded4ef96334e3c154f61d2dea&lang=' + spokenLang + '&text=' + encodeURIComponent(text))
                    .subscribe((response) => {
                        this.translatedText = response.json().text[0];
                    })
            } else {
                this.http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170329T180255Z.3c18d2dc7b65d525.f23ed9a9efa992bded4ef96334e3c154f61d2dea&lang=' + spokenLang + '&text=%20')
                    .subscribe((response) => {
                        this.translatedText = response.json().text[0];
                    })
            }
        } else {
            this.translatedText = "Nothing to translate...!!";
        }
    }

    public speak() {
        
        Speech.setLanguage(this.language)
            Speech.speak({
                text: this.translatedText,
                onError: (e) => {console.log('sorry an error occured.', e)}, // optionnal error callback
                onEnd: () => {console.log('your text has successfully been spoken.')} // optionnal onEnd callback
            })
    }
    
    public splitString(data){
        let stringArray=data.split("-");
        return stringArray[0];
    }

    public test(){
       var win= window.open("https://www.google.com",'win','parent',true);
       
       setTimeout(()=>{
          let inputelem = win.document.body.querySelector('input .gsfi');
          console.log(inputelem)
       },6000)
    //    inputelem.setAttribute("value","vasu");
    //    setTimeout(()=>{
    //        win.close;
    //    },6000)
}
}
