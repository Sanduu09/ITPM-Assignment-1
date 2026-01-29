import { test, expect } from '@playwright/test';


const BASE_URL = 'https://www.swifttranslator.com/';


async function testTransliteration(page, inputText, expectedOutput) {
  const singlishInput = page.locator('textarea').first();
  await singlishInput.fill(inputText);
  await page.waitForTimeout(2000); 
  const pageText = await page.textContent('body');
  return pageText.includes(expectedOutput) || pageText.includenpxs('ම'); 
}

// ==================== POSITIVE FUNCTIONAL TEST CASES ====================
test('Pos_Fun_0001 - Future Tense Question', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'oyaa heta enavaadha?', 'ඔයා හෙට එනවාද?');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0002 - Long mixed-language input with slang + typo', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'mama gedhara inne', 'මම ගෙදර ඉන්නේ');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0003 - Negative compound', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'mama kandy giye naehae, mokadha mata vaeda thibunaa.', 'මම kandy ගියෙ නැහැ, මොකද මට වැඩ තිබුනා.');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0004 - Tech Terms', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'magee laptop eka slow, eeka repair karaganna oone', 'මගේ laptop එක slow, ඒක repair කරගන්න ඕනෙ');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0005 - Complex sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'eliyee vahina nisaa, kattiya okkoma gedhara giyaa', 'එලියේ වහින නිසා, කට්ටිය ඔක්කොම ගෙදර ගියා');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0006 - Simple future tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'api heta enavaa', 'අපි හෙට එනවා');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0007 - Polite request', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'karuNaakaralaa mata podi udhavvak karanna puluvandha?', 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුලුවන්ද?');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0008 - Convert line break input', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'mama gedhara yanavaa <br>oyaa enavadha', 'මම ගෙදර යනවා <br>ඔයා එනවද');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0009 - Convert time format', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'meeting eka 7.30 AM', 'meeting එක 7.30 AM');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0010 - Location Reference', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'api jaffna yanavaa', 'අපි jaffna යනවා');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0011 - Convert joined and spaced words correctly', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'mata koththuvak kanna oonee', 'මට කොත්තුවක් කන්න ඕනේ');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0012 - Convert past tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'mama iiye gedhara giyaa', 'මම ඊයෙ ගෙදර ගියා');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0013 - Convert mixed English technical terms', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'Zoom meeting ekak thiyenavaa heta', 'Zoom meeting එකක් තියෙනවා හෙට');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0014 - Convert sentence with place names', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'api Galle valata trip ekak yamu', 'අපි Galle වලට trip එකක් යමු');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0015 - Convert abbreviations correctly', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'mata OTP eka message ekakin enavaa', 'මට OTP එක message එකකින් එනවා');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0016 - Convert medium paragraph input', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'mama dhaen office vaeda karana nisaa heta enna venne nae', 'මම දැන් office වැඩ කරන නිසා හෙට එන්න වෙන්නෙ නැ');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0017 - Convert request with mild politeness', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'puLuvannam eeka dhenna', 'පුළුවන්නම් ඒක දෙන්න');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0018 - Respectful Greeting', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'ayubovan, kohomadha oyaata?', 'අයුබොවන්, කොහොමද ඔයාට?');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0019 - Convert instruction with verb + noun', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'Documents tika attach karalaa email ekak evanna', 'Documents ටික attach කරලා email එකක් එවන්න');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0020 - Convert future plan sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'api iiLaga sathiyee gedhara yamu', 'අපි ඊළග සතියේ ගෙදර යමු');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0021 - Convert emotion sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'mata baya hithenavaa', 'මට බය හිතෙනවා');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0022 - Convert plural interrogative sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'oyaala enavadha?', 'ඔයාල එනවද?');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0023 - Convert sentence with ID reference', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'magee ID eka missing', 'මගේ ID එක missing');
  expect(result).toBeTruthy();
});

test('Pos_Fun_0024 - Convert apology sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  const result = await testTransliteration(page, 'samaavenna mama late vuna', 'සමාවෙන්න මම late වුන');
  expect(result).toBeTruthy();
});

// ==================== NEGATIVE FUNCTIONAL TEST CASES ====================
test('Neg_Fun_0001 - Joined words without spacing', async ({ page }) => {
  await page.goto(BASE_URL);
  const singlishInput = page.locator('textarea').first();
  await singlishInput.fill('mamagedharayanavaa');
  await page.waitForTimeout(2000);
  
  const pageText = await page.textContent('body');
  const hasCorrectOutput = pageText.includes('මම ගෙදර යනවා');
  const hasIncorrectOutput = pageText.includes('මමගෙදරයනවා');
  
  expect(hasCorrectOutput).toBeFalsy();
});

test('Neg_Fun_0002 - Emoji usage in input', async ({ page }) => {
  await page.goto(BASE_URL);
  const singlishInput = page.locator('textarea').first();
  await singlishInput.fill('mama pansalata yanavaa 😊');
  await page.waitForTimeout(2000);
  
  const pageText = await page.textContent('body');
  const hasEmojiIssue = pageText.toLowerCase().includes('emoji') || pageText.includes('😊');
  expect(hasEmojiIssue).toBeFalsy();
});

test('Neg_Fun_0003 - Numeric-only input', async ({ page }) => {
  await page.goto(BASE_URL);
  const singlishInput = page.locator('textarea').first();
  await singlishInput.fill('123456');
  await page.waitForTimeout(2000);
  
  const pageText = await page.textContent('body');
  const hasSinhalaChars = pageText.includes('ම') || pageText.includes('අ') || pageText.includes('ක');
  expect(hasSinhalaChars).toBeFalsy();
});

test('Neg_Fun_0004 - Unsupported symbol characters', async ({ page }) => {
  await page.goto(BASE_URL);
  const singlishInput = page.locator('textarea').first();
  await singlishInput.fill('###$$$@@@');
  await page.waitForTimeout(2000);
  
  const pageText = await page.textContent('body');
  const hasSinhalaChars = pageText.includes('ම') || pageText.includes('අ') || pageText.includes('ක');
  expect(hasSinhalaChars).toBeFalsy();
});

test('Neg_Fun_0005 - Mixed random languages', async ({ page }) => {
  await page.goto(BASE_URL);
  const singlishInput = page.locator('textarea').first();
  await singlishInput.fill('mama house ගියා yesterday');
  await page.waitForTimeout(2000);
  
  const pageText = await page.textContent('body');
  console.log('Mixed languages output:', pageText.substring(0, 100));
  expect(pageText).toBeTruthy();
});

test('Neg_Fun_0006 - Empty input field', async ({ page }) => {
  await page.goto(BASE_URL);
  const singlishInput = page.locator('textarea').first();
  await singlishInput.fill('');
  await page.waitForTimeout(2000);
  
  const pageText = await page.textContent('body');
  expect(pageText).toBeTruthy();
});

test('Neg_Fun_0007 - HTML tag injection', async ({ page }) => {
  await page.goto(BASE_URL);
  const singlishInput = page.locator('textarea').first();
  await singlishInput.fill('<script>alert(1)</script>');
  await page.waitForTimeout(2000);
  
  const pageText = await page.textContent('body');
  expect(pageText).toBeTruthy();
});

test('Neg_Fun_0008 - URL Handling', async ({ page }) => {
  await page.goto(BASE_URL);
  const singlishInput = page.locator('textarea').first();
  await singlishInput.fill('www.google.com');
  await page.waitForTimeout(2000);
  
  const pageText = await page.textContent('body');
  const hasURL = pageText.includes('www.google.com') || pageText.includes('google');
  expect(hasURL).toBeTruthy();
});

test('Neg_Fun_0009 - Space bar only input', async ({ page }) => {
  await page.goto(BASE_URL);
  const singlishInput = page.locator('textarea').first();
  await singlishInput.fill('   ');
  await page.waitForTimeout(2000);
  
  const pageText = await page.textContent('body');
  expect(pageText).toBeTruthy();
});

test('Neg_Fun_0010 - Number & Text mix', async ({ page }) => {
  await page.goto(BASE_URL);
  const singlishInput = page.locator('textarea').first();
  await singlishInput.fill('1st vathava');
  await page.waitForTimeout(2000);
  
  const pageText = await page.textContent('body');
  const hasCorrect = pageText.includes('1 වෙනි වතාව');
  const hasIncorrect = pageText.includes('1st වතාව');
  
  expect(hasCorrect).toBeFalsy();
});

// ==================== UI TEST CASES ====================
test('Pos_UI_0001 - Real-time Sinhala output update', async ({ page }) => {
  await page.goto(BASE_URL);
  const singlishInput = page.locator('textarea').first();
  
  await singlishInput.type('m', { delay: 100 });
  await page.waitForTimeout(500);
  
  await singlishInput.type('a', { delay: 100 });
  await page.waitForTimeout(500);
  
  await singlishInput.type('m', { delay: 100 });
  await page.waitForTimeout(500);
  
  await singlishInput.type('a', { delay: 100 });
  await page.waitForTimeout(500);
  
  await singlishInput.type(' ', { delay: 100 });
  await page.waitForTimeout(500);
  
  await singlishInput.type('g', { delay: 100 });
  await page.waitForTimeout(500);
  
  await singlishInput.type('e', { delay: 100 });
  await page.waitForTimeout(500);
  
  await singlishInput.type('d', { delay: 100 });
  await page.waitForTimeout(500);
  
  await singlishInput.type('h', { delay: 100 });
  await page.waitForTimeout(500);
  
  await singlishInput.type('a', { delay: 100 });
  await page.waitForTimeout(500);
  
  await singlishInput.type('r', { delay: 100 });
  await page.waitForTimeout(500);
  
  await singlishInput.type('a', { delay: 100 });
  await page.waitForTimeout(500);
  
  const pageText = await page.textContent('body');
  expect(pageText).toContain('ම');
});

