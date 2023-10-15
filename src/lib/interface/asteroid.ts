export interface Asteroid {
     a: number; // Semi-major axis (AU)
     e: number; // Eccentricity
     i: number; // Inclination (degrees)
     om: number; // Longitude of the ascending node (degrees)
     w: number; // Argument of perihelion (degrees)
     q: number; // Perihelion distance (AU)
     ad: number; // Apogee distance (AU)
     per_y: number; // Period (years)
     data_arc: number; // Data arc (days)
     condition_code: number; // Condition code
     n_obs_used: number; // Number of observations used
     H: number; // Absolute magnitude
     spkid: number; // Minor planet number
     sats: number; // Number of satellites
     albedo: number; // Albedo
     diameter_sigma: number; // Diameter uncertainty (km)
     orbit_id: number; // Orbit ID
     epoch: number; // Epoch (JD)
     epoch_mjd: number; // Epoch (MJD)
     epoch_cal: number; // Epoch (Cal)
     ma: number; // Mean anomaly (degrees)
     n: number; // Mean motion (degrees/day)
     tp: number; // Time of perihelion (JD)
     per: number; // Period (days)
     moid: number; // MOID (AU)
     moid_ld: number; // MOID (LD)
     moid_jup: number; // MOID (Jupiter)
     t_jup: number; // Time of closest approach to Jupiter (JD)
     sigma_e: number; // Uncertainty in eccentricity
     sigma_a: number; // Uncertainty in semi-major axis
     sigma_q: number; // Uncertainty in perihelion distance
     sigma_i: number; // Uncertainty in inclination
     sigma_om: number; // Uncertainty in longitude of the ascending node
     sigma_w: number; // Uncertainty in argument of perihelion
     sigma_ma: number; // Uncertainty in mean anomaly
     sigma_ad: number; // Uncertainty in apogee distance
     sigma_n: number; // Uncertainty in mean motion
     sigma_tp: number; // Uncertainty in time of perihelion
     sigma_per: number; // Uncertainty in period
     rms: number; // Root mean square residual
   }