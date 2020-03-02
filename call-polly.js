// Amazon Cognito 認証情報プロバイダーを初期化します
AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-1:e76e86a2-30e3-4576-9f43-29b3e39e9c97',
});

// var calling = new Vue({
//     el: '#textEntry',
//     methods: {
//         speakText: function () {
//             var speechParams = {
//                 OutputFormat: "mp3",
//                 SampleRate: "16000",
//                 Text: "",
//                 TextType: "text",
//                 VoiceId: "Mizuki"
//             };
//             speechParams.Text = document.getElementById("textEntry").value;
         
//             //Polly作成
//             var polly = new AWS.Polly({apiVersion: '2016-06-10'});
         
//             var signer = new AWS.Polly.Presigner(speechParams, polly);
//             var audioSource = document.getElementById('audioSource');
//             var resultText = document.getElementById('resultText');
//             resultText.innerText = 'Now generating...';
         
//             //リクエストして、生成した音声が入っているURLが返ってきたらaudioエレメントのソースに入れる
//             signer.getSynthesizeSpeechUrl(speechParams, function(error, url) {
//                 if (error) {
//                     resultText.innerHTML = error;
//                 } else {
//                     audioSource.src = url;
//                     var audio = document.getElementById('audioPlayback');
//                     audio.load(); //これがないとChromeで動かなかったです、、
//                     audio.onloadeddata = function(){
//                         resultText.innerHTML = "Play!";
//                         audio.play();
//                     };
//                 }
//             });
//         }
//       }
//     })

function speakText() {
 
    var speechParams = {
        OutputFormat: "mp3",
        SampleRate: "16000",
        Text: "",
        TextType: "text",
        VoiceId: "Mizuki"
    };
    speechParams.Text = document.getElementById("textEntry").value;
 
    //Polly作成
    var polly = new AWS.Polly({apiVersion: '2016-06-10'});
 
    var signer = new AWS.Polly.Presigner(speechParams, polly);
    var audioSource = document.getElementById('audioSource');
    var resultText = document.getElementById('resultText');
    resultText.innerText = 'Now generating...';
 
    //リクエストして、生成した音声が入っているURLが返ってきたらaudioエレメントのソースに入れる
    signer.getSynthesizeSpeechUrl(speechParams, function(error, url) {
        if (error) {
            resultText.innerHTML = error;
        } else {
            audioSource.src = url;
            var audio = document.getElementById('audioPlayback');
            audio.load(); //これがないとChromeで動かなかったです、、
            audio.onloadeddata = function(){
                resultText.innerHTML = "Play!";
                audio.play();
            };
        }
    });
}