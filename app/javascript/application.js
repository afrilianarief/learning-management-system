// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('DOMContentLoaded', function() {
  // Ambil elemen teks hover
  var home = document.getElementById('home');
  var courses = document.getElementById('courses');
  var assignments = document.getElementById('assignments');
  var forum = document.getElementById('forum');
  var profile = document.getElementById('profile');

  // Membuat objek audio baru
  var berandaAudio = new Audio('/audios/beranda.mp3');
  var kursusAudio = new Audio('/audios/kursus.mp3');
  var tugasAudio = new Audio('/audios/tugas.mp3');
  var forumAudio = new Audio('/audios/forum.mp3');
  var profilAudio = new Audio('/audios/profil.mp3');

  // Memutar audio saat teks dihover
  home.addEventListener('mouseenter', function() {
    berandaAudio.play();
  });
  courses.addEventListener('mouseenter', function() {
    kursusAudio.play();
  });
  assignments.addEventListener('mouseenter', function() {
    tugasAudio.play();
  });
  forum.addEventListener('mouseenter', function() {
    forumAudio.play();
  });
  profile.addEventListener('mouseenter', function() {
    profilAudio.play();
  });

  // Menghentikan audio saat hover hilang
  home.addEventListener('mouseleave', function() {
    berandaAudio.pause();
    berandaAudio.currentTime = 0; // Reset audio ke awal
  });
  courses.addEventListener('mouseleave', function() {
    kursusAudio.pause();
    kursusAudio.currentTime = 0;
  });
  assignments.addEventListener('mouseleave', function() {
    tugasAudio.pause();
    tugasAudio.currentTime = 0;
  });
  forum.addEventListener('mouseleave', function() {
    forumAudio.pause();
    forumAudio.currentTime = 0;
  });
  profile.addEventListener('mouseleave', function() {
    profilAudio.pause();
    profilAudio.currentTime = 0;
  });
});
