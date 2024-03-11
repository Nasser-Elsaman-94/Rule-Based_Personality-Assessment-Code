// Trigger the function to run when the form is submitted
function onFormSubmit(e) {
  const info = e.namedValues
  
// Generate the PDF document
  const pdfFile = createPDF (info)
  
// Get the file ID of the PDF document   
  const fileId = pdfFile.getId()
 
// Send an email with the PDF attachment
  sendEmailWithAttachment(e.namedValues['Email'][0], fileId)
  sendNotifyingEmail ("i.nasserelsaman@gmail.com", e.namedValues['Email'])
}
        
// Create the PDF document
function createPDF(info) {

  // Define the document contents
  const pdfFolder  = DriveApp.getFolderById ("1vnZJpocbcmOxaKLE7OCQ-Nr4JT4zoikV")
  const tempFolder  = DriveApp.getFolderById ("1stAUvlwkFQjofY__E-4wwmvZvVDryxY1")
  const templateDoc  = DriveApp.getFileById ("1H4GwtgVtp9GMfAWVKvhaTsIOEDRem7t2lhCcZKzVKpU")
  const newTempFile = templateDoc.makeCopy (tempFolder)
  const openDoc = DocumentApp.openById (newTempFile.getId())

  // Declare Date of the created PDF
  const now = new Date()
  const timeZone = Session.getScriptTimeZone()
  const formattedDate = Utilities.formatDate(now, timeZone, 'dd-MM-YYYY HH:mm:ss')
  const footerSection = openDoc.getFooter()
  footerSection.replaceText("{DT}", formattedDate)

  // Open the newTempFile Doc
  const body = openDoc.getBody ()

  // Define the question of the form & replace with the values
  const eMail1 = info["Email"][0]
  body.replaceText("{EML}", eMail1)

  const gender1 = info["Gender"][0]
  body.replaceText("{GE}", gender1)

  const age1 = info["Age"][0]
  body.replaceText("{AG}", age1)

  const country1 = info["Country"][0]
  body.replaceText("{CNTRY}", country1)

  const replacement1 = info["1) Are you the life of the party (Active person)? - هل أنت شخص نشيط للغاية؟"][0]
  body.replaceText("{R1}", replacement1)

  const replacement2 = info["2) Do you feel little concern for others? - هل تولّي إهتماماً قليلاً بالآخرين؟"][0]
  body.replaceText("{R2}", replacement2)

  const replacement3 = info["3) Are you always prepared? - هل دائماً تكون على استعداد لكل ما هو جديد؟"][0]
  body.replaceText("{R3}", replacement3)

  const replacement4 = info["4) Do you get stressed out easily? - هل تشعر بالتوتر بسهولة؟"][0]
  body.replaceText("{R4}", replacement4)

  const replacement5 = info["5) Do you have a rich vocabulary? - لديك حصيلة/ معرفة لغوية غنية بالمفردات والكلمات؟"][0]
  body.replaceText("{R5}", replacement5)

  const replacement6 = info["6) Do you not talk a lot? - لا تميل إلى التحدث كثيراً؟"][0]
  body.replaceText("{R6}", replacement6)

  const replacement7 = info["7) Are you interested in people? - تميل إلى الاهتمام بالآخرين ومساعدتهم؟"][0]
  body.replaceText("{R7}", replacement7)

  const replacement8 = info["8) Do you leave your belongings around? - تترك متعلقاتك الشخصية في أماكن متفرقة ولا تتذكرها كثيراً؟"][0]
  body.replaceText("{R8}", replacement8)

  const replacement9 = info["9) Are you relaxed most of the time? - تميل إلى الإسترخاء أغلب الوقت ولا تتحرك كثيراً؟"][0]
  body.replaceText("{R9}", replacement9)

  const replacement10 = info["10) Do you have difficulty understanding abstract ideas? - هل لديك القدرة على فهم الأفكار التجريدية والمفاهيم التصورية؟"][0]
  body.replaceText("{R10}", replacement10)

  const replacement11 = info["11) Do you feel comfortable around people? - هل تشعر بالراحة في التواجد حول الآخرين؟"][0]
  body.replaceText("{R11}", replacement11)

  const replacement12 = info["12) Do you insult people? - هل تحتقر الأشخاص الأدنى منك؟"][0]
  body.replaceText("{R12}", replacement12)

  const replacement13 = info["13) Do you pay attention to details? - هل تهتم بالتفاصيل؟"][0]
  body.replaceText("{R13}", replacement13)

  const replacement14 = info["14) Do you worry about things? - هل تقلق كثيراً من أبسط الأشياء؟"][0]
  body.replaceText("{R14}", replacement14)

  const replacement15 = info["15) Do you have a vivid imagination? - هل لديك خيال جامح؟"][0]
  body.replaceText("{R15}", replacement15)

  const replacement16 = info["16) Do you keep in the background? - أنت لا تُحِب الظهور كثيراً؟"][0]
  body.replaceText("{R16}", replacement16)

  const replacement17 = info["17) Do you sympathize with others' feelings? - هل تتعاطف مع مشاعر الآخرين؟"][0]
  body.replaceText("{R17}", replacement17)

  const replacement18 = info["18) Do you make a mess of things? - هل تميل إلى إحداث الفوضى في الأشياء؟"][0]
  body.replaceText("{R18}", replacement18)

  const replacement19 = info["19) Do you seldom feel blue? - نادراً ما تشعر بالكآبة والحزن؟"][0]
  body.replaceText("{R19}", replacement19)

  const replacement20 = info["20) Are you not interested in abstract ideas? - لا تهتم كثيراً بالأفكار التصورية والمفاهيم التجريدية؟"][0]
  body.replaceText("{R20}", replacement20)

  const replacement21 = info["21) Do you start conversations? - هل عادةً تبدأ المحادثات مع الآخرين؟"][0]
  body.replaceText("{R21}", replacement21)

  const replacement22 = info["22) Are you not interested in other people's problems? - هل لا تكترث ولا تهتم كثيراً بمشاكل الآخرين؟"][0]
  body.replaceText("{R22}", replacement22)

  const replacement23 = info["23) Do you get chores done right away? - هل تنجز أعمالك ومهامك المنزلية بسرعة؟"][0]
  body.replaceText("{R23}", replacement23)

  const replacement24 = info["24) Are you easily disturbed? - هل تغضب بسهولة وتنزعج من أبسط الأشياء؟"][0]
  body.replaceText("{R24}", replacement24)

  const replacement25 = info["25) Do you have excellent ideas? - هل لديك أفكار إبداعية ومميزة؟"][0]
  body.replaceText("{R25}", replacement25)

  const replacement26 = info["26) Do you have little to say? - هل تتحدث قليلاً؟"][0]
  body.replaceText("{R26}", replacement26)

  const replacement27 = info["27) Do you have a soft heart? - تتعامل برحمة ولين مع الأخرين؟"][0]
  body.replaceText("{R27}", replacement27)

  const replacement28 = info["28) Do you often forget to put things back in their proper place? - غالباً ما تنسى إعادة الأشياء في أماكنها الصحيحة؟"][0]
  body.replaceText("{R28}", replacement28)

  const replacement29 = info["29) Do you get upset easily? - هل تنزعج/ تتضايق بسهولة؟"][0]
  body.replaceText("{R29}", replacement29)

  const replacement30 = info["30) Do you not have a good imagination? - أنت لست واسع الخيال؟ "][0]
  body.replaceText("{R30}", replacement30)

  const replacement31 = info["31) Do you talk to a lot of different people at parties? - يمكنك التحدث مع الغرباء دون الشعور بالإحراج؟"][0]
  body.replaceText("{R31}", replacement31)

  const replacement32 = info["32) Are you not really interested in others? - أنت لست مهتماً بالآخرين على الإطلاق؟"][0]
  body.replaceText("{R32}", replacement32)

  const replacement33 = info["33) Do you like order? - هل تُحِب النظام والترتيب؟"][0]
  body.replaceText("{R33}", replacement33)

  const replacement34 = info["34) Do you change your mood a lot? - هل أنت مُتَقلِب المزاج كثيراً؟"][0]
  body.replaceText("{R34}", replacement34)

  const replacement35 = info["35) Do you quick in understand things around you? - هل أنت سريع الفهم للأشياء من حولك؟"][0]
  body.replaceText("{R35}", replacement35)

  const replacement36 = info["36) Do you not like to draw attention to yourself? - أنت لا تُحِب أن تُلفِت الإنتباه إلى نفسك؟"][0]
  body.replaceText("{R36}", replacement36)

  const replacement37 = info["37) Do you take time out for others? - هل تمنح الآخرين جزءاً من وقتك لمساعدتهم؟"][0]
  body.replaceText("{R37}", replacement37)

  const replacement38 = info["38) Do you shirk your duties.? - هل تتهرب من واجباتك ومسؤولياتك؟"][0]
  body.replaceText("{R38}", replacement38)

  const replacement39 = info["39) Do you have frequent mood swings? - هل لديك تقلبات مزاجية متكررة؟"][0]
  body.replaceText("{R39}", replacement39)

  const replacement40 = info["40) Do you use difficult words? - هل تستخدم كلمات جزِلة/ صعبة؟"][0]
  body.replaceText("{R40}", replacement40)

  const replacement41 = info["41) Do you mind being the center of attention? - هل تمانع من أن تكون محط الأنظار؟"][0]
  body.replaceText("{R41}", replacement41)

  const replacement42 = info["42) Do you feel others' emotions? - هل تشعر بمشاعر الآخرين؟"][0]
  body.replaceText("{R42}", replacement42)

  const replacement43 = info["43) Do you follow a schedule? - هل تتبع جدولاً زمنياً معيناً؟"][0]
  body.replaceText("{R43}", replacement43)

  const replacement44 = info["44) Are you get irritated easily? - هل أنت سريع الغضب؟"][0]
  body.replaceText("{R44}", replacement44)

  const replacement45 = info["45) Do you spend time reflecting on things? - هل تقضي الوقت في التفكير وتحليل الأشياء والمواضيع؟"][0]
  body.replaceText("{R45}", replacement45)

  const replacement46 = info["46) Are you quiet around strangers? -هل تُجيد التحدث مع الغرباء؟"][0]
  body.replaceText("{R46}", replacement46)

  const replacement47 = info["47) Do make people feel at ease? -  هل تُشعِر الآخرين بالراحة وتعاملهم بالرفق واللين؟"][0]
  body.replaceText("{R47}", replacement47)

  const replacement48 = info["48) Are you exacting in my work? -  هل أنت صارمٌ في عملك؟"][0]
  body.replaceText("{R48}", replacement48)

  const replacement49 = info["49) Are you often feel blue? - هل كثيراً ما تشعر بالحزن؟"][0]
  body.replaceText("{R49}", replacement49)

  const replacement50 = info["50) Are you full of ideas? - هل لديك أفكار كثيرة إبداعية؟"][0]
  body.replaceText("{R50}", replacement50)

  // Openness to experience (Declare & Replace with values)
  const oScore = 8 + Number (replacement5) - Number (replacement10) + Number (replacement15) - Number (replacement20) + Number (replacement25) - Number (replacement30) + Number (replacement35) + Number (replacement40) + Number (replacement45) + Number (replacement50)
  body.replaceText ("{OPN}", oScore)

  const perOScore = (oScore/40)*100
  body.replaceText ("{OPER}", perOScore)

  const opnLow = "tend to fear or dislike change, you usually prefer routine and tradition and generally think more logically and concretely. You have a more difficult time being honest about how you feel and may feel isolated at times. Environments that are consistent and stable are best for people who have less of this trait; allowing you to focus intently on one or a few areas will help you to stay balanced.\n\nPotential job ideas (careers) for your personality type are: Banker, Professor, Financial Analyst, Real Estate Agent, Scholar, Auditor, Accountant or Contractor.\n\nEach person has a different combination of the Big Five traits, so potential jobs will vary, as individuals may prefer careers that utilize a different personality trait."
  const opnMedium = "sometimes tend to fear or dislike change, you usually prefer routine and tradition and generally think more logically and concretely. You have a more difficult time being honest about how you feel and may feel isolated at times. Environments that are consistent and stable are best for people who have less of this trait; allowing you to focus intently on one or a few areas will help you to stay balanced.\n\nPotential job ideas (careers) for your personality type are: Banker, Professor, Financial Analyst, Real Estate Agent, Scholar, Auditor, Accountant or Contractor. And because your range grade is medium so sometimes you are more likely to be adaptable, accept change, and appreciate innovative technology. You are intuitive and original, offering new ideas every day. Openness allows people to be vulnerable and honest, which can offer them emotional understanding and deep friendships. Because you are open tend to be more open to change and constiety, you tend to work best in environments that allow you to experience new things every day.\n\nPotential job ideas (careers) for your personality type are: Artist, Travel Writer, Pilot, Lawyer, Publicist, Entrepreneur, Graphic Designer or Philosopher.\n\nEach person has a different combination of the Big Five traits, so potential jobs will vary, as individuals may prefer careers that utilize a different personality trait."
  const opnHigh = "are more likely to be adaptable, accept change, and appreciate innovative technology. You are intuitive and original, offering new ideas every day. Openness allows people to be vulnerable and honest, which can offer you emotional understanding and deep friendships. Because you are open tend to be more open to change and constiety, you tend to work best in environments that allow you to experience new things every day.Potential job ideas (careers) for your personality type are: Artist, Travel Writer, Pilot, Lawyer, Publicist, Entrepreneur, Graphic Designer or Philosopher.\n\nEach person has a different combination of the Big Five traits, so potential jobs will vary, as individuals may prefer careers that utilize a different personality trait."

  if (oScore >= 0 && oScore <= 8)
  {body.replaceText ("RNG1", "Very Low"), body.replaceText ("{OL}", opnLow), body.replaceText ("{OM}", ""), body.replaceText ("{OH}", "")}
  else if (oScore >= 9 && oScore <= 16)
  {body.replaceText ("RNG1", "Low"), body.replaceText ("{OL}", opnLow), body.replaceText ("{OM}", ""), body.replaceText ("{OH}", "")}
  else if (oScore >= 17 && oScore <= 24)
  {body.replaceText ("RNG1", "Medium"), body.replaceText ("{OM}", opnMedium), body.replaceText ("{OL}", ""), body.replaceText ("{OH}", "")}
  else if (oScore >= 25 && oScore <= 32)
  {body.replaceText ("RNG1", "High"), body.replaceText ("{OH}", opnHigh), body.replaceText ("{OL}", ""), body.replaceText ("{OM}", "")}
  else if (oScore >= 33 && oScore <= 40)
  {body.replaceText ("RNG1", "Very High"), body.replaceText ("{OH}", opnHigh), body.replaceText ("{OL}", ""), body.replaceText ("{OM}", "")}
  else
  {"Unknown Result!"}

  // Conscientiousness (Declare & Replace with values)
  const cScore = 14 + Number (replacement3) - Number (replacement8) + Number (replacement13) - Number (replacement18) + Number (replacement23) - Number (replacement28) + Number (replacement33) - Number (replacement38) + Number (replacement43) + Number (replacement48)
  body.replaceText ("{CON}", cScore)

  const perCScore = (cScore/40)*100
  body.replaceText ("{CPER}", perCScore)

  const conLow = "tend to dislike structure and be less organized. You generally prefer to make plans at the last minute and may have a difficult time completing your assignments without encouragement from others. You sometimes act without thinking, which can have a negative effect on those around you. Environments that are less predictable and require more manual work may benefit people who are less conscientious like you, as it allows you room to both improvise and grow. You generally will work well when pursuing a passion under strong leadership.\n\nPotential job ideas (careers) for your personality type are: Firefighter, Sales Representative, Technical Support, Mechanic, Landscaper, Janitor or Driver.\n\nEach person is different and has a unique blend of the Big Five traits. Potential jobs will differ if some decide to pursue a career that favors a different personal attribute."
  const conMedium = "sometimes tend to dislike structure and be less organized. You generally prefer to make plans at the last minute and may have a difficult time completing your assignments without encouragement from others. You sometimes act without thinking, which can have a negative effect on those around you. Environments that are less predictable and require more manual work may benefit people who are less conscientious like you, as it allows you room to both improvise and grow. You generally will work well when pursuing a passion under strong leadership.\n\nPotential job ideas (careers) for your personality type are: Firefighter, Sales Representative, Technical Support, Mechanic, Landscaper, Janitor or Driver. And because your range grade is medium so sometimes you are more likely to be prepared, reliable, and ambitious. You are thoughtful and considerate, carefully considering how their actions will affect those around you. Conscientiousness makes you highly self-disciplined, which helps you effectively accomplish their goals. Because people who are more conscientious tend to easily keep themselves on track, you make great leaders or independent workers, and thrive in environments that hold you to high standards.\n\nPotential job ideas for those who rank higher in this area are: Freelance writer, Marketing, Consultant, Doctor, Actor, Business Owner, Advertising Executive or Politician.\n\nEach person has a different combination of the Big Five traits, so potential job suggestions can vary, as people may prefer careers that utilize a different personal characteristic."
  const conHigh = "You are more likely to be prepared, reliable, and ambitious. You are thoughtful and considerate, carefully considering how their actions will affect those around you. Conscientiousness makes you highly self-disciplined, which helps you effectively accomplish their goals. Because people who are more conscientious tend to easily keep themselves on track, you make great leaders or independent workers, and thrive in environments that hold you to high standards.\n\nPotential job ideas (careers) for your personality type are: Freelance writer, Marketing, Consultant, Doctor, Actor, Business Owner, Advertising Executive or Politician.\n\nEach person has a different combination of the Big Five traits, so potential job suggestions can vary, as people may prefer careers that utilize a different personal characteristic."

  if (cScore >= 0 && cScore <= 8)
  {body.replaceText ("RNG2", "Very Low"), body.replaceText ("{CL}", conLow), body.replaceText ("{CM}", ""), body.replaceText ("{CH}", "")}
  else if (cScore >= 9 && cScore <= 16)
  {body.replaceText ("RNG2", "Low"), body.replaceText ("{CL}", conLow), body.replaceText ("{CM}", ""), body.replaceText ("{CH}", "")}
  else if (cScore >= 17 && cScore <= 24)
  {body.replaceText ("RNG2", "Medium"), body.replaceText ("{CM}", conMedium), body.replaceText ("{CL}", ""), body.replaceText ("{CH}", "")}
  else if (cScore >= 25 && cScore <= 32)
  {body.replaceText ("RNG2", "High"), body.replaceText ("{CH}", conHigh), body.replaceText ("{CL}", ""), body.replaceText ("{CM}", "")}
  else if (cScore >= 33 && cScore <= 40)
  {body.replaceText ("RNG2", "Very High"), body.replaceText ("{CH}", conHigh), body.replaceText ("{CL}", ""), body.replaceText ("{CM}", "")}
  else
  {"Unknown Result!"}

  // Extroversion (Declare & Replace with values)
  const exScore = 20 + Number (replacement1) - Number (replacement6) + Number (replacement11) - Number (replacement16) + Number (replacement21) - Number (replacement26) + Number (replacement31) - Number (replacement36) + Number (replacement41) - Number (replacement46)
  body.replaceText ("{EX}", exScore)

  const perEXScore = (exScore/40)*100
  body.replaceText ("{EPER}", perEXScore)

  const exLow = "tend to dislike being around large groups of people. You generally draw energy from being alone and prefer to think and process internally. Introverts don’t enjoy attention and are usually more reserved. You considered one of introverts who thrives in environments that offer you space, careers that allow you to pursue a passion, while allowing you to spend time alone, help you flourish and grow.\n\nPotential job ideas (careers) for your personality type are: Freelance Writer, Engineer, Mechanic, Artist, Pilot, Librarian or Programmer.\n\nEach person is different and has a unique blend of the Big Five traits.Potential jobs will differ if some decide to pursue a career that favors a different personal attribute."
  const exMedium = "sometimes you tend to dislike being around large groups of people. You generally draw energy from being alone and prefer to think and process internally.  Introverts don’t enjoy attention and are usually more reserved. You considered one of introverts who thrives in environments that offer you space, careers that allow you to pursue a passion, while allowing you to spend time alone, help you flourish and grow.\n\nPotential job ideas (careers) for your personality type are: Freelance Writer, Engineer, Mechanic, Artist, Pilot, Librarian or Programmer.\n\nAnd because your range grade is medium so sometimes you are more likely to be comfortable speaking to larger groups of people, dynamic, and bold. You are confident and outgoing, thriving in situations that offer you room to socialize. Extroversion generally makes you more talkative and more comfortable with attention. People who are more extroverted tend to communicate easily with others and may make great leaders, thriving in environments that allow them the opportunity to build genuine connections with others.\n\nPotential job ideas (careers) for your personality type are: Counselor, Event Planner, Bartender, Actor, Motivational Speaker, Photographer or Journalist.\n\nThe Big Five embraces five very different personality traits, and each person has a different combination of each. It’s important to note that potential jobs for highly extroverted people could vary if the person has an additional strong trait."
  const exHigh = "are more likely to be comfortable speaking to larger groups of people, dynamic, and bold. You are confident and outgoing, thriving in situations that offer you room to socialize. Extroversion generally makes you more talkative and more comfortable with attention. People who are more extroverted tend to communicate easily with others and may make great leaders, thriving in environments that allow them the opportunity to build genuine connections with others.\n\nPotential job ideas (careers) for your personality type are: Counselor, Event Planner, Bartender, Actor, Motivational Speaker, Photographer or Journalist.\n\nThe Big Five embraces five very different personality traits, and each person has a different combination of each. It’s important to note that potential jobs for highly extroverted people could vary if the person has an additional strong trait."

  if (exScore >= 0 && exScore <= 8)
  {body.replaceText ("RNG3", "very low"), body.replaceText ("{EL}", exLow), body.replaceText ("{EM}", ""), body.replaceText ("{EH}", "")}
  else if (exScore >= 9 && exScore <= 16)
  {body.replaceText ("RNG3", "low"), body.replaceText ("{EL}", exLow), body.replaceText ("{EM}", ""), body.replaceText ("{EH}", "")}
  else if (exScore >= 17 && exScore <= 24)
  {body.replaceText ("RNG3", "Medium"), body.replaceText ("{EM}", exMedium), body.replaceText ("{EL}", ""), body.replaceText ("{EH}", "")}
  else if (exScore >= 25 && exScore <= 32)
  {body.replaceText ("RNG3", "High"), body.replaceText ("{EH}", exHigh), body.replaceText ("{EL}", ""), body.replaceText ("{EM}", "")}
  else if (exScore >= 33 && exScore <= 40)
  {body.replaceText ("RNG3", "Very High"), body.replaceText ("{EH}", exHigh), body.replaceText ("{EL}", ""), body.replaceText ("{EM}", "")}
  else 
  {"Unknown Result!"}

  // Agreeableness (Declare & Replace with values)
  const aScore = 14 - Number (replacement2) + Number (replacement7) - Number (replacement12) + Number (replacement17) - Number (replacement22) + Number (replacement27) - Number (replacement32) + Number (replacement37) + Number (replacement42) + Number (replacement47)
  body.replaceText ("{AGR}", aScore)

  const perAScore = (aScore/40)*100
  body.replaceText ("{APER}", perAScore)

  const agrLow = "tend to have a difficult time connecting with and understanding the emotions of others. You are usually more upfront about their personal opinions and may be perceived as rude. Low Agreeableness means you are less naturally-inclined to empathize with other people. Less agreeable people tend to do a better job in environments that don’t expect you to connect emotionally with others. you thrive in careers that are objective and logical, as it allows you to be direct.\n\nPotential job ideas (careers) for your personality type are: Accountant, Engineer, Scientist, Surgeon, Computer Programmer, Author or Venture Capitalist.\n\nEach person is different and has a unique blend of the Big Five traits. Potential jobs will differ if some decide to pursue a career that favors a different personal attribute."
  const agrMedium = "sometimes tend to have a difficult time connecting with and understanding the emotions of others. You are usually more upfront about their personal opinions and may be perceived as rude. Low Agreeableness means you are less naturally-inclined to empathize with other people. Less agreeable people tend to do a better job in environments that don’t expect them to connect emotionally with others. You thrive in careers that are objective and logical, as it allows you to be direct.\n\nPotential job ideas (careers) for your personality type are: Accountant, Engineer, Scientist, Surgeon, Computer Programmer, Author or Venture Capitalist.\n\nAnd because your range grade is medium so you are sometimes more likely to be sensitive, polite, and cheerful. you are loyal and considerate of others’ feelings, tending to offer support and sympathy to those in need of help. Agreeableness makes them generally well-liked and appreciated by other people.\n\nPeople who are more agreeable tend to empathize easily with others. You thrive in environments that encourage them to build connections and make a positive contribution to their community.\n\nPotential job ideas for those who rank higher in this area are: Counselor, Nurse, Teacher, Religious Leader, Veterinarian, Non-Profit Organizer or Judge."
  const agrHigh = "are more likely to be sensitive, polite, and cheerful. You are loyal and considerate of others’ feelings, tending to offer support and sympathy to those in need of help. Agreeableness makes you generally well-liked and appreciated by other people. People who are more agreeable tend to empathize easily with others. You thrive in environments that encourage them to build connections and make a positive contribution to their community.\n\nPotential job ideas (careers) for your personality type are: Counselor, Nurse, Teacher, Religious Leader, Veterinarian, Non-Profit Organizer or Judge.\n\nThe Big Five embraces five very different personality traits, and each person has a different combination of each. It’s important to note that potential jobs for highly agreeable people could vary if the person has an additional strong trait."

  if (aScore >= 0 && aScore <= 8)
  {body.replaceText ("RNG4", "very low"), body.replaceText ("{AL}", agrLow), body.replaceText ("{AM}", ""), body.replaceText ("{AH}", "")}
  else if (aScore >= 9 && aScore <= 16)
  {body.replaceText ("RNG4", "low"), body.replaceText ("{AL}", agrLow), body.replaceText ("{AM}", ""), body.replaceText ("{AH}", "")}
  else if (aScore >= 17 && aScore <= 24)
  {body.replaceText ("RNG4", "Medium"), body.replaceText ("{AM}", agrMedium), body.replaceText ("{AL}", ""), body.replaceText ("{AH}", "")}
  else if (aScore >= 25 && aScore <= 32)
  {body.replaceText ("RNG4", "High"), body.replaceText ("{AH}", agrHigh), body.replaceText ("{AL}", ""), body.replaceText ("{AM}", "")}
  else if (aScore >= 33 && aScore <= 40)
  {body.replaceText ("RNG4", "Very High"), body.replaceText ("{AH}", agrHigh), body.replaceText ("{AL}", ""), body.replaceText ("{AM}", "")}
  else
  {"Unknown Result!"}

  // Natural reactions (Neuroticism) (Declare & Replace with values)
  const nScore = 38 - Number (replacement4) + Number (replacement9) - Number (replacement14) + Number (replacement19) - Number (replacement24) - Number (replacement29) - Number (replacement34) - Number (replacement39) - Number (replacement44) - Number (replacement49)
  body.replaceText ("{NU}", nScore)

  const perNScore = (nScore/40)*100
  body.replaceText ("{NPER}", perNScore)

  const nuLow = "tend to be more relaxed and easy-going. You are generally more adventurous and confident and adapt easily to change. Being low in Neuroticism means you are more naturally geared toward being positive and at peace. Those who are experience less stress and worry tend to do a good well in crises. You thrive in environments that offer new experiences and utilize their stable, composed temperament.\n\nPotential job ideas (careers) for your personality type are: Police Officer, Surgeon, Fire Fighter, Lawyer, Diplomat, Social Worker or Psychiatrist.\n\nEach person is different and has a unique blend of the Big Five traits. Potential jobs will differ if some decide to pursue a career that favors a different personal attribute."
  const nuMedium = "sometimes tend to be more relaxed and easy-going. You are generally more adventurous and confident and adapt easily to change. Being low in Neuroticism means you are more naturally geared toward being positive and at peace.\n\nThose who are experience less stress and worry tend to do a good well in crises. You thrive in environments that offer new experiences and utilize their stable, composed temperament.\n\nPotential job ideas (careers) for your personality type are: Police Officer, Surgeon, Fire Fighter, Lawyer, Diplomat, Social Worker or Psychiatrist. And because your range grade is medium so you are sometimes more likely to be sensitive, shy, and pessimistic. you are naturally nervous and may have a difficult time in less predictable situations. Neuroticism usually leads to higher levels of stress and worry.\n\nPeople who are higher in neuroticism tend to do well in environments that offer them safety and security, while allowing them space to breathe and express themselves.\n\nPotential job ideas (careers) for your personality type are: Writer, Artist, Accountant, Florist, Yoga Instructor or Freelance Designer.\n\nThe Big Five embraces five very different personality traits, and each person has a different combination of each. It’s important to note that potential jobs for people who are higher in neuroticism could vary if the person has an additional strong trait."
  const nuHigh = "are more likely to be sensitive, shy, and pessimistic. you are naturally nervous and may have a difficult time in less predictable situations. Neuroticism usually leads to higher levels of stress and worry.\n\nPeople who are higher in neuroticism tend to do well in environments that offer them safety and security, while allowing them space to breathe and express themselves.\n\nPotential job ideas (careers) for your personality type are: Writer, Artist, Accountant, Florist, Yoga Instructor or Freelance Designer.\n\nThe Big Five embraces five very different personality traits, and each person has a different combination of each. It’s important to note that potential jobs for people who are higher in neuroticism could vary if the person has an additional strong trait."

  if (nScore >= 0 && nScore <= 8)
  {body.replaceText ("RNG5", "very low"), body.replaceText ("{NL}", nuLow), body.replaceText ("{NM}", ""), body.replaceText ("{NH}", "")}
  else if (nScore >= 9 && nScore <= 16)
  {body.replaceText ("RNG5", "low"), body.replaceText ("{NL}", nuLow), body.replaceText ("{NM}", ""), body.replaceText ("{NH}", "")}
  else if (nScore >= 17 && nScore <= 24)
  {body.replaceText ("RNG5", "Medium"), body.replaceText ("{NM}", nuMedium), body.replaceText ("{NL}", ""), body.replaceText ("{NH}", "")}
  else if (nScore >= 25 && nScore <= 32)
  {body.replaceText ("RNG5", "High"), body.replaceText ("{NH}", nuHigh), body.replaceText ("{NL}", ""), body.replaceText ("{NM}", "")}
  else if (nScore >= 33 && nScore <= 40)
  {body.replaceText ("RNG5", "Very High"), body.replaceText ("{NH}", nuHigh), body.replaceText ("{NL}", ""), body.replaceText ("{NM}", "")}
  else
  {"Unknown Result!"}

  openDoc.saveAndClose()
  const titleName = "Personality Assessment Report Results_" + new (Date)
  // Create the PDF document
  const blob = newTempFile.getBlob().setName(titleName + ".pdf");
  const pdfFile = pdfFolder.createFile(blob)
  tempFolder.removeFile (newTempFile)
  return pdfFile;
}

// Send an email with the PDF attachment
function sendEmailWithAttachment(email, fileId) {
  const now = new Date()
  const attachments = [DriveApp.getFileById(fileId).getAs(MimeType.PDF)];
  const message = {
    to: email,
    subject: "Your Personality Assessment Report Results",
    body: "Dear " + email + ",\n\nWe appreciate you taking the time to complete the assessment dated on " + now.toString () + "." + "\n\nPlease check out the personality report results in the attachment; it will undoubtedly give you a better understanding of your personality type which will help you to know yourself better and devlope your skills. \n\n\nSincerely, \nNasser Elsaman,\nOperations Analyst,\n\nHave a question? Reply with email or call: \n(+2) 0155 385 6595\n(+2) 0128 205 4321 \n\nNasser Elsaman (C).",
    attachments: attachments
  };
  
  GmailApp.sendEmail(email, message.subject, message.body, {attachments: message.attachments});
}

// Send an email when new form submitted with remainingQuota & usedQuota (Max 100 emails per day)
function sendNotifyingEmail (myEmail, email) {
  const totalQuota = 100;
  const remainingQuota = MailApp.getRemainingDailyQuota();
  const usedQuota = totalQuota - remainingQuota;
  const message = {
  to: myEmail,
  subject: "A New Form Submitted!",
  body: "Dear Mr. Nasser" + ",\n\nThere is a new form submited now under the email account: " + email + "\nwith a new PDF File for the results. If you want to know his/ her results, check out the attachments in the sent label or check out the folder on your Google Drive account."+ "\n\nPlease note that Gmail quota remaining is: " + remainingQuota + " emails," + " and the number of used quota is " + usedQuota + "." + "\n\nThank you so much." +"\n\n\nNasser Elsaman,\nOperations Analyst,\n(+2) 0155 385 6595\n(+2) 0128 205 4321"
  };
  
  GmailApp.sendEmail(message.to, message.subject, message.body);
 }
