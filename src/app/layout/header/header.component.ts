import {
  Component,
  HostListener,
  AfterViewInit,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];

  currentIndex = 0;
  slideOffset = 0;
  cardWidth = 500; // Adjust this based on your card width

  nextCard() {
    // debugger;
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.updateSlideOffset();
  }

  prevCard() {
    debugger;
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updateSlideOffset();
  }

  updateSlideOffset() {
    debugger;
    this.slideOffset = -this.currentIndex * this.cardWidth;
  }

  getRandomColorClass(): string {
    const colors = [
      'bg-orange-500',
      'bg-blue-500',
      'bg-yellow-500',
      'bg-pink-500',
      'bg-green-500',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  paralaxTitles: NodeListOf<HTMLElement> | undefined;
  didScroll = false;

  ngAfterViewInit() {
    this.paralaxTitles = document.querySelectorAll(
      '.paralax-title'
    ) as NodeListOf<HTMLElement>;
    this.raf();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.didScroll = true;
  }

  raf() {
    if (this.didScroll && this.paralaxTitles) {
      this.paralaxTitles.forEach((element, index) => {
        element.style.transform = `translateX(${window.scrollY / 10}%)`;
      });
      this.didScroll = false;
    }
    requestAnimationFrame(() => this.raf());
  }

  isOpen = false;

  openMenu() {
    this.isOpen = true;
  }

  closeMenu() {
    this.isOpen = false;
  }
  // typing text
  @ViewChild('typedText', { static: true }) typedText!: ElementRef;
  @ViewChild('cursor', { static: true }) cursor!: ElementRef;
  // @ViewChild('typedText', { static: true }) typedText: ElementRef;

  textArray = ['Karma', 'Beyond', 'Build', 'Out'];
  typingDelay = 200;
  erasingDelay = 100;
  newTextDelay = 2000;
  textArrayIndex = 0;
  charIndex = 0;

  ngOnInit(): void {
    this.type();
    // setInterval(() => {
    //   this.changeTextColor();
    // }, 2000);
  }

  type() {
    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      if (!this.cursor.nativeElement.classList.contains('typing')) {
        this.cursor.nativeElement.classList.add('typing');
      }
      this.typedText.nativeElement.textContent += this.textArray[
        this.textArrayIndex
      ].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.type(), this.typingDelay);
    } else {
      this.cursor.nativeElement.classList.remove('typing');
      setTimeout(() => this.erase(), this.newTextDelay);
    }
  }

  erase() {
    if (this.charIndex > 0) {
      if (!this.cursor.nativeElement.classList.contains('typing')) {
        this.cursor.nativeElement.classList.add('typing');
      }
      this.typedText.nativeElement.textContent = this.textArray[
        this.textArrayIndex
      ].substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => {
        if (this.charIndex == 1) {
          this.changeTextColor();
        }
        this.erase();
      }, this.erasingDelay);
    } else {
      this.cursor.nativeElement.classList.remove('typing');
      this.textArrayIndex++;
      if (this.textArrayIndex >= this.textArray.length) {
        this.textArrayIndex = 0;
      }
      setTimeout(() => this.type(), this.typingDelay + 1100);
    }
  }
  //typing text end
  //typing text updated start

  colors: string[] = ['#F9E800', '#007BFF', '#FF006E', '#27FE01'];
  currentColorIndex = 0;

  constructor(private renderer: Renderer2) {}

  changeTextColor() {
    const currentColor = this.colors[this.currentColorIndex];
    this.renderer.setStyle(this.typedText.nativeElement, 'color', currentColor);
    if (this.currentColorIndex + 1 == this.colors.length) {
      this.currentColorIndex = 0;
    } else {
      this.currentColorIndex += 1;
    }
    // this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
  }
}
