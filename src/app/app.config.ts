import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export const ENV = new InjectionToken<string>('ENV');

export const CONFIG: object = environment;