import {
  Component,
  HostListener,
  AfterViewInit,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
declare var ityped: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
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

  textArray = ['Karma', 'Bill', 'Buzz', 'Pilot'];
  typingDelay = 200;
  erasingDelay = 100;
  newTextDelay = 2000;
  textArrayIndex = 0;
  charIndex = 0;

  ngOnInit(): void {
    this.type();
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
      setTimeout(() => this.erase(), this.erasingDelay);
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
}
