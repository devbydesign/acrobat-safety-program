document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <footer>
            <div class="container footer-grid">
                <div class="footer-section footer-company">
                    <h3>Acrobat Branding</h3>
                    <p>786-304-2044<br>sales@acrobatbranding.com</p>
                </div>
                <div class="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        
                        <li><a href="contact.html">Contact Us</a></li>
                        
                        <li><a href="contact.html">Feedback and Suggestions</a></li>
                    </ul>
                </div>
                <div class="footer-section footer-social">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <a href="https://www.linkedin.com/company/brandextenders/" target="_blank" aria-label="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>    
                        <a href="https://www.instagram.com/brandextenders/" target="_blank" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/brandextenders" target="_blank" aria-label="X (Twitter)">
                            <i class="fab fa-x-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/Brandextenders" target="_blank" aria-label="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
            <div class="container copyright">
                <p>Website created by RBB Marketing. All rights reserved.</p>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Update current year dynamically
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
