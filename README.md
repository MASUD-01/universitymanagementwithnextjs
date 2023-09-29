## For SVG IMAGE

https://storyset.com/

# react hook form use korchi

ans: FormItem #reusable component create korechi

# antd design use kora hoiche

# Google fonts use kora hoice

# redux use korechi

# axios(rtk query te Axios baseQuery)

ans: eta more customizaion er jonne (fetchBaseQuery er jaygay axiosBaseQuery use korbo)

# code spliting (api inject)

# .unwrap();

ans: data response e unwrap kore (mane data vitor res day na)

# decoded accessToken

ans: npm i jwt-decode

# const router = useRouter();

ans: redirect korar jonne use hoy--- import { useRouter } from "next/navigation";

<!-- next js ------------------------app and layout ???????? ---
app: app folder ta route hisabe kaj kore er vitor sob server side render hoy by default. er vitor page namee file thake. app er vitor root e je page.tsx abong layout.tsx thake eta localhost:3000 te run hoy. page.tsx e ja kisu kora hoy ta layout.tsx e children hodabe pay.
Layout : app er vitor folder name create korle eta route hisabe kaj kore
       (withLayout) evabe korle route hoy na eikhane group layout banaise(eta valo kore bujte hobe), (withLayout) er vitor akta folder ak akta route hisabe kaj kortase,,eikhane layout akta kintu (withLayout) er vitor prottek ta route er jonne kaj kortase
 -->

<!------------------- how to works login and logout -------------

signup: ei project e kono signup thakbe na. **eikhane agee theke akjon super admin create kora thakbe

login: bakend-: ami jokhon login kortasi mane user database e ache. jokhon eta backend e gelo, age chek kore backend ei user ta ache ki na jodi thake tahole akta accessToken (etar time kom diye create kore) and refreshToken (etar time besi diye create kore)  create kore, front end e sudhu accessToken pathay, refreshToken ta res.cookie() te set kore, ei sob gula backend theke holo, jodi user bakend na pay akta error message diye day.


frontend-: er por frontend e response hisabe user tar info pay abong eikhane accessToken thake, jodi thake (accessToken) je route e jete chay ba tar profile route e pathai dai abong
accessToken ke localStorage e setKori aro kisu function tairi kori ei accessToken er upor vitti kore jemon getUserInfo(eta te accessToken ke decode kore er vitor er info ta nai), isLoggined(etar madhomme accessToken ache kina boolean value nai), removeAccesToken(remove kora hoy localStorage theke)

logout: logout button eclick korle removeAccesToken() call kore dibo and router.push('/login') page e pathai dibo
--->

<!----------------------------- why we use axiosBaseQuery--- ignore rtkquery fetchBaseQuery------????????

ans: production grade application e kokhono default fetchbasequery use kora hoy na, tarporiborte axios ba ajax.
axios er facility and functionality onek besi ja extends kore server e je req ,res jabe ta modify korte pari its like a middleware (middleware req,res er majkhane bose modify kore), same kaj ta axios kore ** ei jonne fetchBaseQuery use kori nai, pratise project e fetchBaseQuery ta thik ache,

Interceptors: req, res modify korte help kore,,,jemon(//response e sudhu accessToken e asbe(modify kora hoise axios interceptorResponse theke, modify mane success:true,message:'', asbena, tar mane backend theke astece thiki kintu ami client e modify korlam axios er madhomme) 1. response first backend theke axios e astese,
 2. axios modify kore rtk query er response e ditase)
 3. ei modify er kaj jodi korte pari ei jonne **rtk query er default fetchBaseQuery use Na kore axios fetch base query use kora hoise.
  -->

  <!-- role onujayi gropLayout e sidebar access, role ta passe accessToken jeta akta function er madhomme localstorage theke get hosse -->

<!-- metaData "use client" component e kaj kore na
ans: karon server side hobe abong google keawl korbe tai oi componet take use client name akta component e use kore load korbo page.tsx server componet e

 -->

<!-- *******step form e reload dile data thakbe, using local storage********** -->
<!-- ----------yup form validation
abong eke resolve korar jonne yup resolver use kora hoyeche
-->
