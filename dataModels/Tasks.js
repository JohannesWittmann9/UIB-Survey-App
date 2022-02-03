import { documentTask } from "../firebase/fireLib";

const data1 = {
    "title": "Will taking zinc supplements improve pregnancy?",
    "description": "Zinc is an essential mineral. In fact, pregnant woman do require more minerals",
    "questions": 
    [
         
        {
            "snippet": "https://www.drugs.com/cons/zinc-chelated.html",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F1%2F1_1.png?alt=media&token=b6c1a291-4c54-4a3b-bed4-908fead57fb2",
            "title": "Zinc Chelated Advanced Patient Information - Drugs.com",
            "description": "Detailed drug Information for Zinc Chelated. Includes common brand names, drug descriptions, warnings, side effects and dosing information."
        },

        {
            "snippet": "https://www.medicalnewstoday.com/articles/320393.php?sr",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F1%2F1_2.png?alt=media&token=b6c1a291-4c54-4a3b-bed4-908fead57fb2",
            "title": "Zinc deficiency: Symptoms, diagnosis, and treatment",
            "description": "A look at zinc deficiency, a condition where the body doesn’t have enough of the mineral. Included are details on causes and how it is diagnosed."
        },
         
       
        {
            "snippet": "https://lpi.oregonstate.edu/mic/life-stages/pregnancy-lactation",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F1%2F1_3.png?alt=media&token=b6c1a291-4c54-4a3b-bed4-908fead57fb2",
            "title": "Pregnancy and Lactation",
            "description": "Contents Introduction Micronutrient Requirements During Pregnancy Vitamins Biotin Folate Riboflavin Vitamin A Vitamin B6 Vitamin B12 Vitamin C and Vitamin E Vitamin D Vitamin K"
        },
        
        {
            "snippet": "https://www.livestrong.com/article/517962-what-does-chelated-zinc-do/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F1%2F1_4.png?alt=media&token=b6c1a291-4c54-4a3b-bed4-908fead57fb2",
            "title": "Does Chelated Zinc Boost Your Immunity? | Livestrong.com",
            "description": "Chelated zinc is a supplement that is more easily absorbed than elemental zinc. Your doctor may suggest the supplement if you're deficient in the essential nutrient."
        },
         
        {
            "snippet": "https://www.purefoodcompany.com/category/nutrition/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F1%2F1_5-1.png?alt=media&token=b6c1a291-4c54-4a3b-bed4-908fead57fb2",
            "title": "Nutrition Tips | Protein Powder Benefits | Pure Food Company" ,
            "description": "Nutrition tips."
        },

        {
            "snippet": "https://www.nrv.gov.au/nutrients/zinc",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F1%2F1_6.png?alt=media&token=b6c1a291-4c54-4a3b-bed4-908fead57fb2",
            "title": "Zinc | Nutrient References Values",
            "description": "Zinc is widely distributed in foods. Meats, fish and poultry are the major contributors to the diet but cereals and dairy foods also ..."
        },

        {
            "snippet": "https://www.livestrong.com/article/471892-what-is-zinc-picolinate/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F1%2F1_7.png?alt=media&token=b6c1a291-4c54-4a3b-bed4-908fead57fb2",
            "title": "Why Zinc Picolinate May Be the Best of All Zinc Supplements | Livestrong.com",
            "description": "Zinc picolinate is an acid form of a trace mineral that your body needs for optimal health. Although zinc is common, it is possible for you to develop a zinc deficiency ..."
        },

        {
            "snippet": "https://vitamins.lovetoknow.com/Zinc_Sulfate_Supplements",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F1%2F1_8.png?alt=media&token=b6c1a291-4c54-4a3b-bed4-908fead57fb2",
            "title": "What to Know About Zinc Sulfate Supplements | LoveToKnow",
            "description": "Zinc sulfate supplements are typically used in the treatment of a zinc deficiency; however, there are other reasons to add this supplement to your diet."
        },
         
       
        {
            "snippet": "https://www.babymed.com/tag/pregnancy-supplements",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F1%2F1_9.png?alt=media&token=b6c1a291-4c54-4a3b-bed4-908fead57fb2",
            "title": "pregnancy supplements | babyMed.com",
            "description": "Babymed.com articles & information about 'pregnancy supplements' for mothers, expecting mothers, and soon to be expecting mothers."
        },

        {
            "snippet": "https://ods.od.nih.gov/factsheets/Zinc-Consumer/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F1%2F1_10.png?alt=media&token=b6c1a291-4c54-4a3b-bed4-908fead57fb2",
            "title": "Office of Dietary Supplement - Zinc",
            "description": "Zinc helps the immune system and helps make proteins and DNA. Learn how much you need, good sources, deficiency symptoms, and health effects here."
        }
        
    ]
};

const data2 = {
    "title": "Does Aleve relieve migraine headaches?",
    "description": "Aleve/Naproxen is a type of nonsteroidal anti-inflammatory drug used for pain relief. \n \n Migraine is a strong headache",
    "questions": 
    [
         
        {
            "snippet": "https://www.migrainesavvy.com/eye-migraine.html",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F2%2F2_1.png?alt=media&token=3a881eef-5d07-42e7-8916-84755eb88ee8",
            "title": "Eye Migraine: How To Get Rid Of One",
            "description": "Do you get crushing eye migraine pain with your attacks? Here are 4 great acupuncture points you can test out to get some effective relief from the pain asap."
        },
         
        {
            "snippet": "http://www.thedailyheadache.com/tag/nsaid",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F2%2F2_2.png?alt=media&token=3a881eef-5d07-42e7-8916-84755eb88ee8",
            "title": "NSAID Archives - The Daily Headache",
            "description": "seeking joy in a life with chronic migraine, chronic daily headache and chronic illness"
        },
       
        {
            "snippet": "https://migraineagain.com/head-cold-and-migraine-at-same-time/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F2%2F2_3.png?alt=media&token=3a881eef-5d07-42e7-8916-84755eb88ee8",
            "title": "How to Deal with a Head Cold and Migraine at the Same Time",
            "description": "Battling a head cold and migraine at the same time is exhausting and hard to avoid. A few essential items make all the difference."
        },
        
        {
            "snippet": "https://www.healthline.com/health/lack-of-sleep-headache",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F2%2F2_4.png?alt=media&token=3a881eef-5d07-42e7-8916-84755eb88ee8",
            "title": "Lack of Sleep Headache: Treatments and More",
            "description": "You can get certain types of headache from lack of sleep, including migraine and tension headaches. We’ll talk about why this connection exists and how to treat these headaches."
        },
         
        {
            "snippet": "https://www.webmd.com/migraines-headaches/news/20170502/brain-research-new-migraine-treatments",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F2%2F2_5.png?alt=media&token=3a881eef-5d07-42e7-8916-84755eb88ee8",
            "title": "Brain Research Fuels New Migraine Treatments",
            "description": "New migraine drugs avoid the risky effects of current treatments on the heart. Other new therapies use electrical pulses to stop headaches."
        },

        {
            "snippet": "https://personalinjurydoctorgroup.com/migraine-treatment/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F2%2F2_6.png?alt=media&token=3a881eef-5d07-42e7-8916-84755eb88ee8",
            "title": "Migraine Treatment",
            "description": "El Paso, TX. Migraine treatment depends on the frequency of headaches, severity of the headaches, the degree of disability the headaches cause, and any other medical conditions. Fortunately, chiropractic treatment can help."
        },

        {
            "snippet": "https://prepschooldaily.blogspot.com/2018/12/traditional-medicine-otc-pain-relievers.html",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F2%2F2_7.png?alt=media&token=3a881eef-5d07-42e7-8916-84755eb88ee8",
            "title": "Conventional Medicine--OTC Pain Relievers",
            "description": "Disclaimer: The information below is only for educational purposes to provide a general idea of what medications should be stockpiled and w..."
        },

        {
            "snippet": "https://migraine.com/stories/the-day-my-life-changed-due-to-spinal-migraine/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F2%2F2_8.png?alt=media&token=3a881eef-5d07-42e7-8916-84755eb88ee8",
            "title": "The day my life (with spinal migraine) changed",
            "description": "I thought I might be having a stroke. I went through blood test, CT scans, and finally a spinal tap to find an answer... to finally being considered 'spinal migraine'."
        },

        {
            "snippet": "https://www.cedarburgchiropractor.com/article/herbal-supplements-better-than-drugs-for-migraine",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F2%2F2_9.png?alt=media&token=3a881eef-5d07-42e7-8916-84755eb88ee8",
            "title": "Herbal Supplements Better Than Drugs for Migraine | Cedarburg, WI Chiropractor | Newporte Courte Family Chiropractic",
            "description": "Herbal Supplements Better Than Drugs for Migraine"
        },

        {
            "snippet": "http://livinginthisseason.com/tips-for-migraine-sufferers/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F2%2F2_10.png?alt=media&token=3a881eef-5d07-42e7-8916-84755eb88ee8",
            "title": "Tips For Migraine Sufferers - Living In This Season",
            "description": "Migraines can appear at anytime, anywhere you are. You need to be prepared if you are a frequent sufferer. It would be wise to carry around a kit of some sort that contains useful items such as ear plugs, sunglasses, and in some extreme cases, a plastic bag (for people who are prone to vomiting). […]"
        },
    ]
};

const data3 = {
    "title": "Does steam from a shower help croup?",
    "description": "Croup is an infection of the upper airway. It causes swelling, which can obstruct breathing and lead to a barking cough.",
    "questions": 
    [
         
        {
            "snippet": "https://statpearls.com/as/ears%20nose%20and%20throat/20142/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F3%2F3_1.png?alt=media&token=aaa4a921-aa30-40fe-ba68-7291327e6947",
            "title": "Croup",
            "description": "Croup PubMed published article"
        },

        {
            "snippet": "http://memydogsmylife.blogspot.com/2010/03/croup-is-poop.html",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F3%2F3_2.png?alt=media&token=aaa4a921-aa30-40fe-ba68-7291327e6947",
            "title": "croup is poop.",
            "description": "So remember on Friday how I blogged that my weekend was going to be lame? Woah, was I right. I must be some sort of prophet or something ..." 
        },
       
        {
            "snippet": "https://simple.wikipedia.org/wiki/Croup",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F3%2F3_3.png?alt=media&token=aaa4a921-aa30-40fe-ba68-7291327e6947",
            "title": "Croup - Simple English Wikipedia, the free encyclopedia",
            "description": "Croup (or laryngotracheobronchitis) is caused by a virus and leads to swelling inside the throat. This swelling causes problems with normal breathing."
        },
        
        {
            "snippet": "https://lakeviewpediatrics.net/Resources/Is-Your-Child-Sick/Croup",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F3%2F3_4.png?alt=media&token=aaa4a921-aa30-40fe-ba68-7291327e6947",
            "title": "Croup | Chicago, IL | Lakeview Pediatrics",
            "description": "Is this your child's symptom?Barky cough and hoarse voice caused by a virusCroup is a viral infection of the voicebox (larynx)The croupy cough is tight, low-pitched, and barky (like a barking seal)The voice or cry is hoarse (called laryngitis)So..."
        },
         
        {
            "snippet": "https://www.aafp.org/afp/2011/0501/p1067.html",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F3%2F3_5.png?alt=media&token=aaa4a921-aa30-40fe-ba68-7291327e6947",
            "title": "Croup: An Overview - American Family Physician",
            "description": "Croup is a common illness responsible for up to 15 percent of emergency department visits due to respiratory disease in children in the United States. Croup symptoms usually start like an upper respiratory tract infection, with low-grade fever and coryza followed by a barking cough and various degrees of respiratory distress ..."
        },

        {
            "snippet": "https://www.childcarelimited.com/Is-Your-Child-Sick/Is-Your-Child-Sick/Croup",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F3%2F3_6.png?alt=media&token=aaa4a921-aa30-40fe-ba68-7291327e6947",
            "title": "Croup | Kansas City, MO | Child Care Limited",
            "description": "Is this your child's symptom?Barky cough and hoarse voice caused by a virusCroup is a viral infection of the voicebox (larynx)The croupy cough is tight, low-pitched, and barky (like a barking seal)The voice or cry is hoarse (called laryngitis)So..."
        },

        {
            "snippet": "https://www.famlii.com/common-childhood-diseases-every-child-will-catch/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F3%2F3_7.png?alt=media&token=aaa4a921-aa30-40fe-ba68-7291327e6947",
            "title": "9 Common Diseases Every Child Will Catch - Famlii",
            "description": "These common childhood diseases are unavoidable. EVERY child will eventually encounter them at some point in their life. Symptoms like fever, diarrhea, and rash can be severe, though sometimes they are quite mild."
        },

        {
            "snippet": "https://virtualpediatrichospital.org/patients/cqqa/croup.shtml",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F3%2F3_8.png?alt=media&token=aaa4a921-aa30-40fe-ba68-7291327e6947",
            "title": "Virtual Pediatric Hospital: CQQA: Croup",
            "description": "Children with croup are most contagious during the first days of illness. How is croup treated? If your child is having trouble breathing, there are simple ..."
        },

        {
            "snippet": "https://snottynoses.com.au/aroma-bloom-wood-look-vaporiser/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F3%2F3_9.png?alt=media&token=aaa4a921-aa30-40fe-ba68-7291327e6947",
            "title": "Aroma Snooze Ultrasonic Vaporiser, Red Light Therapy and Sound Therapy | Snotty Noses",
            "description": "Buy the Aroma Snooze Ultrasonic Long running diffuser for babies, children and adults and discover the natural soothing power and health benefits of using &quot;cool mist&quot; vaporisers, and sound therapy everyday. Brisbane store"
        },

        {
            "snippet": "https://www.verywellhealth.com/facts-about-croup-1298410",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F3%2F3_10.png?alt=media&token=aaa4a921-aa30-40fe-ba68-7291327e6947",
            "title": "Symptoms, Causes, and Treatment of Croup",
            "description": "Croup is a catch-all term for childhood inflammation and swelling of the area of the throat that includes the vocal chords. Learn more."
        }
    ]
};

const data4 = {
    "title": "Can minoxidil treat hair loss?",
    "description": "Minoxidil is the active ingredient in Rogaine, a consumer product marketed as a hair regrowth treatment to achieve fuller, thicker hair.",
    "questions": 
    [
         
        {
            "snippet": "http://explainingmedicine.com/category/conditions/custom1/blood-pressure/apo-gain-see-minoxidil/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F4%2F4_1.png?alt=media&token=09cf2568-b503-40df-bc07-07a0d9fe9fc4",
            "title": "Apo-Gain (see Minoxidil) - Explaining Medicine",
            "description": "Minoxidil (On the skin) min-OX-i-dil Used to cause hair growth in certain types of baldness. Drug classes Alopecia Agent (About this –…"
        },
         
        {
            "snippet": " http://howtoendhairloss.com/rogaine-and-minoxidil-shall-i-use-any-of-them.html",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F4%2F4_2.png?alt=media&token=09cf2568-b503-40df-bc07-07a0d9fe9fc4",
            "title": "Rogaine and Minoxidil - Shall I Use Any of Them?",
            "description": "Minoxidil is a generic name for Rogaine, the first medicinal drug ever approved for treating baldness in men and women. Today, Rogaine is just one of many topical hair loss treatments that contain minoxidil."
        },
       
        {
            "snippet": "https://www.medicalnewstoday.com/articles/321527.php",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F4%2F4_3.png?alt=media&token=09cf2568-b503-40df-bc07-07a0d9fe9fc4",
            "title": "Female pattern baldness: Causes, treatment, and prevention",
            "description": "While most women lose between 50 and 100 strands of hair per day, this hair is usually quickly replaced by new growth. When bald patches or thinning occurs, however, it may be a sign of female pattern baldness ..."
        },
        
        {
            "snippet": "https://www.hairtransplants-hdc.com/blog/item/androgenetic-alopecia-androgenetic-hair-loss-in-men",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F4%2F4_4.png?alt=media&token=09cf2568-b503-40df-bc07-07a0d9fe9fc4",
            "title": "Androgenetic Alopecia / Androgenetic Hair Loss in Men",
            "description": "HDC is a leading hair restoration, Transplant and treatment clinic in Europe, with specialized, certified surgeons and technicians on fue and strip hair techniques"
        },
         
        {
            "snippet": "https://www.impactofhairloss.be/viewtopic.php?f=4&t=250&start=45",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F4%2F4_5.png?alt=media&token=09cf2568-b503-40df-bc07-07a0d9fe9fc4",
            "title": "What's up with these amazing recoveries? e.g. Somebody - Page 4",
            "description": "How is that some people have these great results from medication like Finasteride and Minoxidil where they regrow all their hair? I use everything there is and at most it helps me maintain my hair but I haven't regrown jack shit ..."
        },

        {
            "snippet": "https://www.hairguard.com/minoxidil-side-effects/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F4%2F4_6.png?alt=media&token=09cf2568-b503-40df-bc07-07a0d9fe9fc4",
            "title": "Minoxidil Side Effects: 16 Most Common With Pictures - Hairguard",
            "description": "Topical minoxidil (Rogaine) is the most common treatment for men and women with hair loss. In this article, we discuss the most common side effects. This will help you understand what to expect before starting treatment. It will also give you tips on dealing with these side effects. You will learn: What minoxidil is How ... Read more"
        },

        {
            "snippet": "https://hairverse.com/minoxidil-5-10-15/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F4%2F4_7.png?alt=media&token=09cf2568-b503-40df-bc07-07a0d9fe9fc4",
            "title": "High Strength Minoxidil: Does 10% and 15% Work Better?",
            "description": "Ever since the therapeutic treatment of hair loss started gaining traction in the 1970s..."
        },

        {
            "snippet": "http://www.bestonlinemd.com/male-pattern-baldness/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F4%2F4_8.png?alt=media&token=09cf2568-b503-40df-bc07-07a0d9fe9fc4",
            "title": "Male Pattern Baldness",
            "description": "Hair loss or baldness (technically known as alopecia) is a loss of hair from the head or body. Baldness can refer to general hair loss or androgenic alopec"
        },

        {
            "snippet": "https://hairloss.com/can-the-topical-treatment-minoxidil-solve-your-hair-loss/",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F4%2F4_9.png?alt=media&token=09cf2568-b503-40df-bc07-07a0d9fe9fc4",
            "title": "Can the Topical Treatment Minoxidil Solve Your Hair Loss? | Hair Loss",
            "description": "MINOXIDIL WORKS AS A HAIR LOSS TREATMENT, BUT NOT AS EASILY AS PEOPLE THINK IT DOES. The smart brand marketing of Rogaine (minoxidil) when it was approved for over-the-counter sales led millions to expect to regain hair with ease. But 14 years later, have real experiences with the product lived up to the hype? Not […]"
        },

        {
            "snippet": "http://hairway.org/show.aspx?id=1132&cid=95",
            "content": "https://firebasestorage.googleapis.com/v0/b/surveyuib.appspot.com/o/pictures%2F4%2F4_10.png?alt=media&token=09cf2568-b503-40df-bc07-07a0d9fe9fc4",
            "title": "Perfect Image Solutions 15% Minoxidil 加入 Azelaic Acid & Retinol成份的說明(待翻譯)",
            "description": "Perfect Image Solutions Enhanced with Azelaic Acid & Retinol Description: Our minoxidil products are scientifically formulated to penetrate the scalp for proper stimulation of the hair follicles, promoting hair growth in the safest and most effective method possible ... "
        },
    ]
}

function documentData ()
{
    documentTask('1', data1);
    documentTask('2', data2);
    documentTask('3', data3);
    documentTask('4', data4);
}


// From Laurens Holst and ashleedawg
// retrieved from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

class Tasks {

    constructor()
    {
        this.tasks = ["1","2","3","4"];
        shuffleArray(this.tasks);
        documentData();
    }

    getList()
    {
        return this.tasks;
    }

}

export default Tasks;