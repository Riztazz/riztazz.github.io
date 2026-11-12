/* The one place the contact address lives. Every page that shows it loads this file.
   A link marked data-contact-email gets a mailto href, with the attribute value as the subject when set.
   A link that also carries data-contact-email-text shows the address as its text. */
var CONTACT_EMAIL = 'CezaryStanowski0@gmail.com';

document.querySelectorAll('[data-contact-email]').forEach(function (link)
{
    var subject = link.getAttribute('data-contact-email');
    link.href = 'mailto:' + CONTACT_EMAIL + (subject ? '?subject=' + encodeURIComponent(subject) : '');

    if (link.hasAttribute('data-contact-email-text')) {
        link.textContent = CONTACT_EMAIL;
    }
});
