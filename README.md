Emergency Hotline 

১/ DOM Element সিলেকশন

getElementById  শুধু id দিয়ে সিলেক্ট করা যায়। এটা দিয়ে কখনো ক্লাস সিলেক্ট করা যায় না।

getElementsByClassName  শুধু class দিয়ে সিলেক্ট করা যায়। এটা দিয়ে id সিলেক্ট করা যায় না।

querySelector → এখানে id, class দুটোই সিলেক্ট করা যায়। তবে একাধিক এলিমেন্ট থাকলে এটি সবসময় প্রথম child সিলেক্ট করবে।

ক্লাস সিলেক্ট করতে হলে আগে . ব্যবহার করতে হয়  যেমন: .cardBtn

আইডি সিলেক্ট করতে হলে আগে # ব্যবহার করতে হয়  যেমন: #cardBtn

querySelectorAll  আগের মতোই id ও class সিলেক্ট করা যায়, তবে এখানে একসাথে একাধিক এলিমেন্ট সিলেক্ট করা সম্ভব।

২/ নতুন এলিমেন্ট তৈরি ও DOM-এ ইনসার্ট

HTML

<div id="dynamicContainer"></div>
<button id="divCreatorBtn" class="border rounded p-2">Add+</button>


JavaScript

const dynamicContainer = document.getElementById("dynamicContainer");

document
  .getElementById("divCreatorBtn")
  .addEventListener("click", function () {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div>I am new element</div>`;
    dynamicContainer.appendChild(newDiv);
});


 এখন Add+ বাটনে ক্লিক করলে নতুন "I am new element" নামে একটি div তৈরি হবে।

৩/ Event Bubbling

Event Bubbling বলতে বোঝায়—কোনো একটি element যদি nested অবস্থায় parent–child লেয়ারের মধ্যে থাকে, তখন event প্রথমে inner element থেকে শুরু হয়ে ধাপে ধাপে তার parent node পর্যন্ত propagate হয়। অর্থাৎ event টি উপরের দিকে বুদবুদের মতো ছড়িয়ে যায়।

৪/ Event Delegation

Event Delegation হলো এমন একটি টেকনিক যেখানে আলাদা আলাদা element-এ লুপ চালিয়ে event listener বসানোর পরিবর্তে, আমরা তাদের common parent element-এ একবারেই listener বসাই।

ছোট প্রজেক্টে লুপ চালিয়ে ইভেন্ট attach করলে তেমন সমস্যা হয় না।

কিন্তু যদি হাজার/লাখ element থাকে, সেক্ষেত্রে লুপে performance খারাপ হয়ে যায় এবং পেজ heavy হয়ে পড়ে।

Event Delegation ব্যবহার করলে ডাইনামিক element-ও সহজে handle করা যায়, এবং কোড অনেক efficient হয়।

৫/ preventDefault() বনাম stopPropagation()

event.preventDefault()  কোনো ফর্ম সাবমিট করলে সাধারণত পুরো পেজ রিলোড হয়ে যায়। কিন্তু বড় প্রজেক্টে এটা সমস্যা সৃষ্টি করে, কারণ প্রতিবার পেজ reload হলে API বারবার কল হয়। এ সমস্যা এড়াতে আমরা preventDefault() ব্যবহার করি। এটি event-এর ডিফল্ট action (যেমন form reload) বন্ধ করে দেয়।

event.stopPropagation()  এটি event bubbling বা capturing বন্ধ করে দেয়, তবে ডিফল্ট action বন্ধ করে না।
