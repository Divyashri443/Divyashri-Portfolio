import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard US Letter: 612 x 792 pt
  const pageWidth = 612;
  const pageHeight = 792;
  const page = pdfDoc.addPage([pageWidth, pageHeight]);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette: Clean, professional, ATS-friendly
  const colorText = rgb(0.08, 0.11, 0.15);         // #141c26 - Deep rich charcoal for primary text
  const colorSubtext = rgb(0.24, 0.28, 0.35);     // #3d4759 - Neutral slate for secondary text
  const colorPrimary = rgb(0.06, 0.28, 0.52);     // #0f4785 - Sophisticated navy blue accent
  const colorLine = rgb(0.78, 0.83, 0.88);        // #c7d4e0 - Crisp divider line
  const colorBullet = rgb(0.06, 0.28, 0.52);

  const marginX = 44;
  const contentWidth = pageWidth - (marginX * 2); // 524 pt
  let cursorY = pageHeight - 42; // Balanced top margin

  // Helper for drawing wrapped text
  function drawWrappedText(text, x, y, maxWidth, font, size, color, lineHeight) {
    const words = text.split(' ');
    let currentLine = '';
    let currentY = y;

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine ? `${currentLine} ${words[i]}` : words[i];
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth > maxWidth && currentLine) {
        page.drawText(currentLine, { x, y: currentY, size, font, color });
        currentLine = words[i];
        currentY -= lineHeight;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      page.drawText(currentLine, { x, y: currentY, size, font, color });
      currentY -= lineHeight;
    }
    return currentY;
  }

  // Section Heading with clean rule
  function drawSectionHeading(title) {
    cursorY -= 13;
    page.drawText(title.toUpperCase(), {
      x: marginX,
      y: cursorY,
      size: 11,
      font: fontBold,
      color: colorPrimary,
    });
    cursorY -= 4.5;
    page.drawLine({
      start: { x: marginX, y: cursorY },
      end: { x: marginX + contentWidth, y: cursorY },
      thickness: 1.2,
      color: colorPrimary,
    });
    cursorY -= 12;
  }

  // ==================== HEADER ====================
  page.drawText('DIVYASHRI', {
    x: marginX,
    y: cursorY,
    size: 22,
    font: fontBold,
    color: colorPrimary,
  });
  cursorY -= 18;

  page.drawText('Information Science & Engineering Student | Frontend Developer', {
    x: marginX,
    y: cursorY,
    size: 10.5,
    font: fontBold,
    color: colorSubtext,
  });
  cursorY -= 14;

  const contactText1 = 'Email: divyashrinayak5@gmail.com   |   Phone: +91-9380785751';
  page.drawText(contactText1, {
    x: marginX,
    y: cursorY,
    size: 9,
    font: fontRegular,
    color: colorText,
  });
  cursorY -= 12;

  const contactText2 = 'LinkedIn: https://www.linkedin.com/in/divyashri-aa9ba8296   |   GitHub: https://github.com/Divyashri443';
  page.drawText(contactText2, {
    x: marginX,
    y: cursorY,
    size: 9,
    font: fontRegular,
    color: colorText,
  });
  cursorY -= 3;

  // ==================== PROFESSIONAL SUMMARY ====================
  drawSectionHeading('Professional Summary');
  const summaryText = 'Information Science and Engineering student with a strong foundation in frontend development and practical exposure to full-stack web development through academic projects and internship experience. Passionate about building user-focused web applications, working with JavaScript and React.js, and developing practical software solutions.';
  cursorY = drawWrappedText(summaryText, marginX, cursorY, contentWidth, fontRegular, 9.2, colorText, 13.5);
  cursorY -= 1;

  // ==================== EDUCATION ====================
  drawSectionHeading('Education');
  
  // College
  page.drawText('Bachelor of Engineering – Information Science & Engineering', {
    x: marginX,
    y: cursorY,
    size: 9.8,
    font: fontBold,
    color: colorText,
  });
  const dur1 = '2023 – Present';
  page.drawText(dur1, {
    x: marginX + contentWidth - fontBold.widthOfTextAtSize(dur1, 9.5),
    y: cursorY,
    size: 9.5,
    font: fontBold,
    color: colorSubtext,
  });
  cursorY -= 13;
  page.drawText('Mangalore Institute of Technology and Engineering', {
    x: marginX,
    y: cursorY,
    size: 9,
    font: fontRegular,
    color: colorSubtext,
  });
  const cgpaText = 'CGPA: 9.29';
  page.drawText(cgpaText, {
    x: marginX + contentWidth - fontBold.widthOfTextAtSize(cgpaText, 9.2),
    y: cursorY,
    size: 9.2,
    font: fontBold,
    color: colorPrimary,
  });
  cursorY -= 15;

  // 12th
  page.drawText('Senior Secondary (12th)', {
    x: marginX,
    y: cursorY,
    size: 9.5,
    font: fontBold,
    color: colorText,
  });
  const dur2 = '2023';
  page.drawText(dur2, {
    x: marginX + contentWidth - fontRegular.widthOfTextAtSize(dur2, 9),
    y: cursorY,
    size: 9,
    font: fontRegular,
    color: colorSubtext,
  });
  cursorY -= 13;
  page.drawText('Government PU College, Bailur, Udupi  |  Board: KSEAB', {
    x: marginX,
    y: cursorY,
    size: 9,
    font: fontRegular,
    color: colorSubtext,
  });
  const perc1 = 'Percentage: 93.5%';
  page.drawText(perc1, {
    x: marginX + contentWidth - fontBold.widthOfTextAtSize(perc1, 9),
    y: cursorY,
    size: 9,
    font: fontBold,
    color: colorText,
  });
  cursorY -= 15;

  // 10th
  page.drawText('Secondary School (SSLC)', {
    x: marginX,
    y: cursorY,
    size: 9.5,
    font: fontBold,
    color: colorText,
  });
  const dur3 = '2021';
  page.drawText(dur3, {
    x: marginX + contentWidth - fontRegular.widthOfTextAtSize(dur3, 9),
    y: cursorY,
    size: 9,
    font: fontRegular,
    color: colorSubtext,
  });
  cursorY -= 13;
  page.drawText('Government PU College, Bailur, Udupi  |  Board: KSEEB', {
    x: marginX,
    y: cursorY,
    size: 9,
    font: fontRegular,
    color: colorSubtext,
  });
  const perc2 = 'Percentage: 96.32%';
  page.drawText(perc2, {
    x: marginX + contentWidth - fontBold.widthOfTextAtSize(perc2, 9),
    y: cursorY,
    size: 9,
    font: fontBold,
    color: colorText,
  });
  cursorY -= 1;

  // ==================== INTERNSHIP EXPERIENCE ====================
  drawSectionHeading('Internship Experience');
  page.drawText('InnoByte Services', {
    x: marginX,
    y: cursorY,
    size: 10,
    font: fontBold,
    color: colorText,
  });
  const expDate = 'November 2025';
  page.drawText(expDate, {
    x: marginX + contentWidth - fontBold.widthOfTextAtSize(expDate, 9.5),
    y: cursorY,
    size: 9.5,
    font: fontBold,
    color: colorSubtext,
  });
  cursorY -= 13.5;
  page.drawText('Full Stack Developer Intern', {
    x: marginX,
    y: cursorY,
    size: 9.2,
    font: fontItalic,
    color: colorPrimary,
  });
  cursorY -= 13.5;
  const expDesc = 'Developed a Blog API project using RESTful architecture and implemented CRUD operations for efficient data handling. Gained practical exposure to backend development, debugging, and code optimization while improving problem-solving skills and teamwork.';
  cursorY = drawWrappedText(expDesc, marginX, cursorY, contentWidth, fontRegular, 9, colorText, 13.5);
  cursorY -= 1;

  // ==================== TECHNICAL SKILLS ====================
  drawSectionHeading('Technical Skills');
  const skills = [
    { label: 'Programming:', value: 'C, Java' },
    { label: 'Web Development:', value: 'HTML, CSS, JavaScript, React.js' },
    { label: 'Database:', value: 'SQL, MongoDB' },
    { label: 'Tools:', value: 'Visual Studio Code, Eclipse IDE, PyCharm, Code::Blocks, Jupyter Notebook' },
    { label: 'Office:', value: 'MS PowerPoint, MS Word, MS Excel' },
  ];

  skills.forEach((skill) => {
    page.drawText(skill.label, {
      x: marginX,
      y: cursorY,
      size: 9.2,
      font: fontBold,
      color: colorText,
    });
    const labelWidth = fontBold.widthOfTextAtSize(skill.label, 9.2);
    page.drawText(skill.value, {
      x: marginX + labelWidth + 8,
      y: cursorY,
      size: 9.2,
      font: fontRegular,
      color: colorSubtext,
    });
    cursorY -= 14;
  });
  cursorY -= 1;

  // ==================== PROJECTS ====================
  drawSectionHeading('Projects');
  
  // Project 1: CareerCore
  page.drawText('CareerCore – Placement Intelligence Platform', {
    x: marginX,
    y: cursorY,
    size: 9.8,
    font: fontBold,
    color: colorText,
  });
  const proj1Tag = 'Group of 4';
  page.drawText(proj1Tag, {
    x: marginX + contentWidth - fontBold.widthOfTextAtSize(proj1Tag, 9.2),
    y: cursorY,
    size: 9.2,
    font: fontBold,
    color: colorSubtext,
  });
  cursorY -= 13.5;
  page.drawText('Technologies: React.js, Node.js, MongoDB, Python (ML), REST APIs, JWT', {
    x: marginX,
    y: cursorY,
    size: 8.8,
    font: fontItalic,
    color: colorPrimary,
  });
  cursorY -= 13.5;
  const proj1Desc = 'Developed an AI-driven placement intelligence platform using React.js, Node.js, MongoDB, Python (ML), REST APIs, and JWT to connect students, faculty, and recruiters in a unified system. Features include Placement Readiness Score, personalized roadmap engine, skill gap analysis, digital portfolio builder with faculty verification, and faculty dashboards.';
  cursorY = drawWrappedText(proj1Desc, marginX, cursorY, contentWidth, fontRegular, 9, colorText, 13);
  cursorY -= 6;

  // Project 2: QuizMaster
  page.drawText('QuizMaster – Web-Based Quiz Application', {
    x: marginX,
    y: cursorY,
    size: 9.8,
    font: fontBold,
    color: colorText,
  });
  const proj2Tag = 'Individual Project';
  page.drawText(proj2Tag, {
    x: marginX + contentWidth - fontBold.widthOfTextAtSize(proj2Tag, 9.2),
    y: cursorY,
    size: 9.2,
    font: fontBold,
    color: colorSubtext,
  });
  cursorY -= 13.5;
  page.drawText('Technologies: React.js, HTML, CSS, JavaScript', {
    x: marginX,
    y: cursorY,
    size: 8.8,
    font: fontItalic,
    color: colorPrimary,
  });
  cursorY -= 13.5;
  const proj2Desc = 'Developed an interactive web-based quiz application using React.js, HTML, CSS, and JavaScript for category-based quizzes and self-assessment. Implemented validated authentication, randomized questions, multiple categories, and an interactive quiz experience.';
  cursorY = drawWrappedText(proj2Desc, marginX, cursorY, contentWidth, fontRegular, 9, colorText, 13);
  cursorY -= 1;

  // ==================== COURSES & ACHIEVEMENTS ====================
  drawSectionHeading('Courses & Achievements');
  const achievements = [
    'Certified in Crash Course on Java – Coursera',
    'NPTEL Certification – DATA MINING – IIT Kharagpur, 2026',
    'Hands-on Experience on Arduino UNO Workshop – MITE, May 2025',
    'Generative AI Workshop – GrowthSchool, April 2026',
    'Tata Imagination Challenge – Tata Group, 2025',
  ];

  achievements.forEach((ach) => {
    page.drawText('•', {
      x: marginX + 2,
      y: cursorY,
      size: 9.5,
      font: fontBold,
      color: colorBullet,
    });
    page.drawText(ach, {
      x: marginX + 14,
      y: cursorY,
      size: 9,
      font: fontRegular,
      color: colorText,
    });
    cursorY -= 14;
  });

  console.log('Final cursorY:', cursorY, '(Bottom margin is:', cursorY, 'pt out of 792 pt page)');

  // Save document
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve(process.cwd(), 'public/Divyashri_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Resume PDF generated successfully at:', outputPath, 'Bytes:', pdfBytes.length);
}

generateResume().catch(console.error);
