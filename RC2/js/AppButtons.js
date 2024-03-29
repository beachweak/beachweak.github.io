function redirectToLink(link, newTab = true) {
  setTimeout(function() {
    if(newTab) {
      window.open(link);
    } else {
      window.location.href = link;
    }
  }, 300);
}

function handleLaunchButtonClick(link) {
  redirectToLink(link, true);
}

function attachButtonListeners() {
  document.getElementById("indexBtn").addEventListener("click", function() {
    redirectToLink("index.html", false);
  });

  document.getElementById("appsBtn").addEventListener("click", function() {
    redirectToLink("apps.html", false);
  });

  document.getElementById("widgetsBtn").addEventListener("click", function() {
    redirectToLink("widgets.html", false);
  });

  document.getElementById("settingsBtn").addEventListener("click", function() {
    redirectToLink("settings.html", false);
  });

  const launchButtons = document.getElementsByClassName("rounded-button");
  const launchButtonLinks = [
    "https://login.microsoftonline.com/login.srf",
    "https://chat.openai.com",
    "https://as86-appstore85.c2kschools.net/AppStore",
    "https://myfiles.c2kschools.net/HTCOMNET/default.aspx?Mobile=standard",
    "https://calendar.google.com/calendar/u/0/r?pli=1",
    "https://drive.google.com",
    "https://bard.google.com",
    "https://lx.c2kschools.net/",
    "https://www.adobe.com/express/",
    "https://github.com",
    "https://gitlab.com",
    "https://attaxia.github.io/MSOutlookit/",
    "https://cobalt.tools",
    "https://noclip.website",
    "https://wikipedia.org",
    "https://wikivoyage.org",
    "https://sites.google.com",
    "https://tgcofficial.github.io",
    "https://youtube.com",
    "https://teams.microsoft.com/",
    "https://outlook.office365.com/mail/",
    "https://open.spotify.com/",
    "https://plecak.lol/R2K",
    "https://globle-game.com/"
  ];

  for (let i = 0; i < launchButtons.length; i++) {
    launchButtons[i].addEventListener("click", function() {
      handleLaunchButtonClick(launchButtonLinks[i]);
    });
    // add title attribute for tooltip
    launchButtons[i].setAttribute("title", launchButtonLinks[i]);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  attachButtonListeners();
});
