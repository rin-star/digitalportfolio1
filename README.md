# 📁 Digital Portfolio Template

A simple, beginner-friendly HTML portfolio template for students and teachers to create and host a professional digital portfolio using GitHub Pages.

## 🎯 What is this?

This repository contains a ready-to-use portfolio website template that you can customize with your own information and publish online for free using GitHub Pages. **No coding experience required!** Just follow the steps below.

---

## ✨ Features

- **Simple HTML structure** - Easy to understand and edit
- **Clean, professional design** - Looks great on all devices
- **Pre-built sections** for:
  - About Me
  - Projects
  - Credentials/Certifications
  - Contact Information
- **Free hosting** with GitHub Pages
- **No installation needed** - Edit directly in your browser

---

## 🚀 Getting Started (For Students & Teachers)

### Step 1: Copy This Template to Your Account

1. Click the green **"Use this template"** button at the top of this page
2. Select **"Create a new repository"**
3. Name your repository (example: `my-portfolio` or `john-portfolio`)
4. Make sure it's set to **Public**
5. Click **"Create repository"**

✅ You now have your own copy of the portfolio!

---

### Step 2: Customize Your Portfolio

1. In your new repository, click on the **`index.html`** file
2. Click the **pencil icon (✏️)** to edit
3. Replace the placeholder text with your own information:
   - Change `[Your Name]` to your actual name
   - Update the "About Me" section with your introduction
   - Add your projects (you can add or remove list items)
   - Add your certifications and achievements
   - Add your contact information (email, LinkedIn, etc.)

#### 📝 Example Edits:

**Before:**
```html
Hello! My name is [Your Name]. I am passionate about [your interests or profession].
```

**After:**
```html
Hello! My name is Sarah Johnson. I am passionate about web design and digital art.
```

4. Scroll down and click **"Commit changes"**
5. Add a short description like "Updated my information"
6. Click **"Commit changes"** again

✅ Your portfolio is now personalized!

---

### Step 3: Publish Your Portfolio with GitHub Pages

1. In your repository, click on **Settings** (top menu)
2. Scroll down and click **Pages** in the left sidebar
3. Under "Source", select **`main`** branch
4. Click **Save**
5. Wait 1-2 minutes for your site to build
6. Refresh the page - you'll see a link like: `https://yourusername.github.io/repository-name/`

✅ Your portfolio is now live on the internet!

---

## 📚 Understanding the Code (Optional)

You don't need to understand HTML to use this template, but here's a quick guide if you're curious:

- **`<header>`** - The top section with your name and navigation
- **`<section>`** - Each main area of content (About, Projects, etc.)
- **`<h1>`, `<h2>`** - Headings (titles) of different sizes
- **`<p>`** - Paragraphs of text
- **`<ul>` and `<li>`** - Bulleted lists
- **`<a href="...">`** - Links to other pages
- **`<style>`** - Contains the design/appearance rules

---

## 🎨 Customization Tips

### Changing Colors

Find the `<style>` section in `index.html` and look for:

```css
header {
    background: #333;  /* Dark gray - change this! */
    color: #fff;       /* White text */
}
```

Try these color codes:
- Navy blue: `#2c3e50`
- Teal: `#16a085`
- Purple: `#8e44ad`
- Dark green: `#27ae60`

### Adding More Sections

Copy an existing `<section>` block and paste it before the `<footer>`:

```html
<section id="skills">
    <h2>Skills</h2>
    <p>Here are my technical skills:</p>
    <ul>
        <li>HTML & CSS</li>
        <li>Python Programming</li>
        <li>Graphic Design</li>
    </ul>
</section>
```

Don't forget to add a link in the navigation:

```html
<nav>
    <a href="#about">About Me</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>  <!-- New link -->
    <a href="#credentials">Credentials</a>
    <a href="#contact">Contact Info</a>
</nav>
```

### Adding Images

To add a profile picture or project images:

1. Upload your image to the repository (click "Add file" > "Upload files")
2. Add this code where you want the image:

```html
<img src="profile-photo.jpg" alt="My profile photo" style="width: 200px; border-radius: 50%;">
```

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| My site isn't showing up | Wait 2-3 minutes after enabling Pages, then refresh |
| Changes aren't appearing | Clear your browser cache or open in incognito mode |
| My page looks broken | Make sure you didn't delete any `<>` tags accidentally |
| I can't find Settings | You need to be the repository owner to access Settings |

---

## 👥 For Teachers: Classroom Use

### Assignment Ideas

1. **Portfolio Project** - Have students create portfolios showcasing class projects
2. **Resume Website** - Students build a professional online presence
3. **HTML Introduction** - Use as a teaching tool for basic HTML structure
4. **Certification Showcase** - Display digital badges from completed courses

### Grading Checklist

- [ ] Repository created from template
- [ ] Personal information added (name, bio)
- [ ] At least 2 projects listed
- [ ] Contact information included
- [ ] Site successfully published on GitHub Pages
- [ ] Navigation links work correctly

---

## 📖 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML Basics (W3Schools)](https://www.w3schools.com/html/)
- [CSS Color Picker](https://www.w3schools.com/colors/colors_picker.asp)

---

## 💡 Need Help?

- **Students:** Ask your teacher or check the [GitHub Pages Guide](https://docs.github.com/en/pages/quickstart)
- **Teachers:** Open an [Issue](../../issues) in this repository for support

---

## 📄 License

This template is free to use for educational purposes. Customize it however you'd like!

---

**Happy portfolio building! 🎉**

---

### Quick Reference Card

**🔄 To make changes:**
1. Click `index.html`
2. Click the ✏️ pencil icon
3. Make your edits
4. Scroll down and click "Commit changes" (twice)

**🌐 To view your site:**
Go to: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

**🎨 To change colors:**
Edit the `#333` and similar codes in the `<style>` section