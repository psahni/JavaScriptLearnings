* Angular animations are built on top of the standard Web Animations API and run natively on browsers that support it.

app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

