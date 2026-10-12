from pathlib import Path
import random
random.seed(12)
parts=['''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs>
<linearGradient id="sky" x2="0" y2="1"><stop stop-color="#eeeede"/><stop offset="1" stop-color="#cddbb7"/></linearGradient>
<linearGradient id="grass" x2=".3" y2="1"><stop stop-color="#dae5c4"/><stop offset="1" stop-color="#b9cfa2"/></linearGradient>
<linearGradient id="water" x2="0" y2="1"><stop stop-color="#a6c6b0"/><stop offset="1" stop-color="#8ebdb3"/></linearGradient>
<linearGradient id="wall" x2="1" y2="1"><stop stop-color="#f8efdb"/><stop offset="1" stop-color="#d7c6a6"/></linearGradient>
<linearGradient id="roof" x2="0" y2="1"><stop stop-color="#668574"/><stop offset="1" stop-color="#446c5c"/></linearGradient>
<filter id="soft"><feGaussianBlur stdDeviation="5"/></filter>
<pattern id="tiles" width="14" height="11" patternUnits="userSpaceOnUse"><path d="M0 10h14M7 0v10" fill="none" stroke="#91a08b" stroke-width=".6"/></pattern>
</defs><rect width="1200" height="800" fill="url(#sky)"/>
<circle cx="1010" cy="102" r="45" fill="#f6edd3" opacity=".65"/>
<path d="M0 240 90 114 130 169 217 63 268 146 344 110 428 205 532 96 566 40 600 139 692 213 760 109 795 71 828 118 940 208 1040 66 1099 157 1160 118 1200 181V410H0" fill="#bdc9b5" opacity=".38"/>
<path d="M0 255 116 163 201 229 302 164 418 248 560 153 669 253 794 186 865 262 1006 194 1084 243 1169 181 1200 223V440H0" fill="#a8bda2" opacity=".5"/>
<path d="M0 328C153 230 173 242 279 286S446 208 570 247 742 327 824 257 1068 247 1200 319V800H0" fill="#97b18a" opacity=".65"/>
<path d="M-40 408C90 300 310 357 400 302S683 293 771 316 1085 313 1235 420L1210 704C1080 786 904 775 810 772S538 758 401 812 86 735-20 647Z" fill="#9aad87"/>
<path d="M-40 388C90 280 310 337 400 282S683 273 771 296 1085 293 1235 400L1210 684C1080 766 904 755 810 752S538 738 401 792 86 715-20 627Z" fill="url(#grass)" stroke="#a5ba91" stroke-width="2"/>
<path d="M516 352C520 425 652 393 661 472S617 565 734 596 867 648 814 736" fill="none" stroke="#b3bfa0" stroke-width="56" opacity=".3"/>
<path d="M516 352C520 425 652 393 661 472S617 565 734 596 867 648 814 736" fill="none" stroke="#e5ddbd" stroke-width="47"/>
<path d="M661 472Q776 444 984 397M631 493Q450 416 217 431M665 552Q509 639 348 618" fill="none" stroke="#e5ddbd" stroke-width="30" stroke-linecap="round"/>
<path d="M171 497C214 455 291 479 361 487S399 546 445 585 438 665 363 685 219 727 144 677 70 575 171 497Z" fill="#a5bb98"/>
<path d="M173 502C216 463 287 487 357 495S390 552 437 590 432 659 360 676 221 715 148 670 82 576 173 502Z" fill="url(#water)" stroke="#dae2bf" stroke-width="5"/>
<path d="M155 558q69-26 136-8m-51 68q49-16 101-5m-181 44q41 4 65-2m153-76 33 6" fill="none" stroke="#cee1c9" stroke-width="2" opacity=".7"/>
<path d="m407 469-23 35 23 39 26-34Z" fill="#b3986d" stroke="#877c5c" stroke-width="2"/><path d="m400 480 22 25m-27-17 22 26m-27-17 22 27m-26-18 21 24m-13-52 24 24m-29 8 6-15" fill="none" stroke="#dec8a0" stroke-width="4"/>
''']
def tree(x,y,s=1,c='#78986b',type='round'):
    parts.append(f'<g transform="translate({x} {y}) scale({s})"><ellipse cy="8" rx="23" ry="9" fill="#75906d" opacity=".18"/><path d="M0-20V7" stroke="#9e916b" stroke-width="5"/>')
    if type=='pine':parts.append(f'<path d="M0-85 22-47H11l22 33H13l20 19H-31l20-19h-20l23-33h-12Z" fill="{c}"/><path d="M0-72 0-7" stroke="#aec092" opacity=".45"/>')
    else:parts.append(f'<ellipse cy="-36" rx="27" ry="29" fill="{c}"/><ellipse cx="-17" cy="-29" rx="21" ry="24" fill="{c}"/><ellipse cx="14" cy="-24" rx="21" ry="25" fill="{c}"/><ellipse cy="-47" rx="23" ry="20" fill="#b1c299" opacity=".5"/>')
    parts.append('</g>')
for x,y,s in [(48,400,.9),(109,354,1.1),(171,336,.9),(231,332,.8),(316,302,.9),(382,290,.8),(760,316,.9),(851,305,.8),(1116,349,1.2),(1170,398,1.1),(1145,525,.9),(1155,593,1),(1080,678,1.2),(972,730,.9),(100,656,.8),(90,738,1.1),(474,727,1.1),(561,736,.8),(390,743,.7)]:tree(x,y,s,type='pine' if x%3==0 else 'round')
for i in range(35):
    x=random.choice([random.randint(15,150),random.randint(1090,1190)]);y=random.randint(385,635)
    tree(x,y,random.uniform(.4,.75),random.choice(['#8ca779','#97b07f','#7d9c70']))
def building(x,y,s=1,roof='#668574',levels=1):
    parts.append(f'<g transform="translate({x} {y}) scale({s})"><ellipse cx="0" cy="43" rx="111" ry="29" fill="#6d8762" opacity=".15"/><path d="m-94 17 99-23 85 31-98 27-86-35Z" fill="#cfccb0" stroke="#b4b394"/><path d="m-90 8 97-23 79 31v17L-9 59-90 25Z" fill="url(#wall)" stroke="#acb394"/><path d="m-9 21 95-24v38L-9 59Z" fill="#d3c6a8"/><path d="M-75-55v72m53-58v77m99-78v76" stroke="#aa8a5f" stroke-width="6"/><path d="m-68-20 45 17V27l-45-15Z" fill="#827c56"/><path d="m-62-16 34 13V20l-34-12Z" fill="#b39c72"/><path d="M-53-13V11m13-19v23" stroke="#dfc9a0" stroke-width="1.5"/><path d="m5-6 59-13v29L5 26Z" fill="#8a8b61"/><path d="m11-2 47-11v19L11 19Z" fill="#cbb790"/><path d="M23-5v21m13-24v21m13-24v21" stroke="#b6a071" stroke-width="2"/>')
    parts.append(f'<path d="M-109-58Q-43-58-5-103 49-60 105-40L115-44 99-20-8 11-114-33-120-49Z" fill="{roof}" stroke="#466858" stroke-width="2"/><path d="M-109-49-6-13 99-39M-8-92-6-13" fill="none" stroke="#a7b599" stroke-width="3"/><path d="M-109-58Q-43-58-5-103 49-60 105-40L115-44 99-20-8 11-114-33-120-49Z" fill="url(#tiles)" opacity=".5"/><path d="m-14 20 25 9v28l-25-8Z" fill="#6d7454"/>')
    if levels>1:parts.append(f'<path d="m-65-86 60-17 62 26v-48l-62-20-60 22Z" fill="url(#wall)"/><path d="M-87-121Q-33-127-6-163 40-125 75-109L86-116 73-94-5-72-85-101-94-112Z" fill="{roof}" stroke="#466858" stroke-width="2"/><path d="m-9-153 3 60M-78-117-6-91 75-110" fill="none" stroke="#9ba98b" stroke-width="2"/><path d="m-43-99 16 5v12l-16-5m57-10 15-4v12l-15 4" fill="#9f9d77"/>')
    parts.append('<path d="m-34 54 24 9 43-11v8l-43 13-24-10Z" fill="#d9d0b2" stroke="#b0b694"/><path d="m-34 63 24 10 44-13v8l-44 13-24-10" fill="#dfd7bd" stroke="#b0b694"/></g>')
building(620,368,1.12,levels=2)
building(226,439,.7,roof='#939065')
for x,y in [(169,415),(273,410),(173,449)]:tree(x,y,.8,c='#8ea76f')
for row in range(3):
 for col in range(5):
    x=263+col*30+row*23;y=605+row*19-col*6
    parts.append(f'<path d="m{x} {y} 26-6 20 11-27 8Z" fill="#a1ad7b" stroke="#bec697"/><path d="m{x+15} {y+2}v-15m0 8q-9-1-7-8 9 0 7 8m0-2q2-10 9-8 0 9-9 8" stroke="#69916a" fill="#89a473" stroke-width="2"/>')
building(344,581,.49,roof='#869062')
parts.append('<path d="m906 423 8-90 49-51 47 20 57 80-18 57-66 20Z" fill="#a1ac98"/><path d="m914 334 49-52 3 70-43 35Z" fill="#c0c7b0"/><path d="m966 352 44-50 5 91-49 41Z" fill="#96a18e"/><path d="m968 382 32-8 17 21-16 29-36 7Z" fill="#778877"/><path d="m972 390 17-5 11 13-12 12-16-2Z" fill="#a8c5bc"/><path d="m982 389 7-4 4 14-5 11" fill="#d6e3d2"/><path d="m915 418 53 14 81-20" fill="none" stroke="#d6d5b9" stroke-width="10"/>')
building(1080,441,.46,roof='#7d8980')
parts.append('<g transform="translate(891 639)"><ellipse rx="87" ry="41" fill="#9fb78e" opacity=".2"/><ellipse rx="75" ry="35" fill="#d8dfc4" stroke="#b7c7a5" stroke-width="3"/><ellipse cy="-5" rx="63" ry="29" fill="#abc5aa" stroke="#e6e9d0" stroke-width="2"/><ellipse cy="-5" rx="48" ry="22" fill="none" stroke="#d2e3c5" stroke-width="2"/><path d="M0-27 46-5 0 17-46-5Z" fill="none" stroke="#dde7cd" stroke-width="2"/><path d="M0-52v47M-46-28l0 23m92-23v23" stroke="#96ae8e" stroke-width="5"/><path d="m0-78 19 33-19 24-19-24Z" fill="#acd6c3" stroke="#6f9f88" stroke-width="2"/><path d="m0-78 0 57 19-24Z" fill="#cae5d4"/><ellipse cy="-51" rx="26" ry="58" fill="#d8e9d0" opacity=".15"/></g>')
building(595,608,.68,roof='#947d60')
parts.append('<path d="M591 535q-17-23-3-42t-8-34" fill="none" stroke="#eef2e0" stroke-width="10" opacity=".4"/>')
for x,y in [(524,375),(706,401),(737,551),(890,471),(455,484),(468,620),(985,642),(757,736)]:
 parts.append(f'<g transform="translate({x} {y})"><path d="M0-27v31" stroke="#a69266" stroke-width="3"/><path d="M-6-31h12v12H-6Z" fill="#dfc29a" stroke="#ab986f"/><path d="M-8-32h16M-8-18h16" stroke="#9e906c" stroke-width="2"/><path d="M0-18v5" stroke="#c6ac77"/></g>')
for i in range(40):
 x=random.randint(120,1100);y=random.randint(350,730)
 if (160<x<450 and 470<y<690)or(480<x<780):continue
 parts.append(f'<path d="m{x} {y} 1-5m0 5-5-3m4 3 6-2" stroke="#9bb482" stroke-width="1.7" fill="none"/>')
for x,y in [(114,508),(1060,510),(520,666),(825,353),(733,694)]:
 parts.append(f'<path d="m{x} {y} 12-17 21-2 12 20-27 7Z" fill="#b7c2a7" stroke="#a1b294"/><path d="m{x+12} {y-17} 8 18 24 2" fill="none" stroke="#dce0c6"/>')
for x,y in [(1059,582),(177,684),(451,360)]:tree(x,y,.8,c='#c8b29b')
parts.append('''<g transform="translate(778 752)"><path d="M-36-61v65m72-65v65" stroke="#b59b70" stroke-width="7"/><path d="M-55-62q54 19 110 0M-41-48h82" stroke="#788865" stroke-width="7" fill="none"/><path d="M-7-47H7v18H-7Z" fill="#e2cf9f" stroke="#a99970"/></g><path d="M0 773Q175 695 306 769T611 779T943 784T1200 725V800H0Z" fill="#e9ecda" opacity=".65"/></svg>''')
Path(__file__).resolve().parents[1].joinpath('dist/world.svg').write_text(''.join(parts))
