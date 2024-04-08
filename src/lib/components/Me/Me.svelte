<script lang="ts">
  import './Me.scss';
  // set date to september 2018
  const startDate = new Date('2018-09-01');
  let remainingSeconds = 0;
  let remainingMinutes = 0;
  let remainingHours = 0;
  let remainingDays = 0;
  let remainingMonths = 0;
  let years = 0;
  const getTime = () => {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();
    years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    remainingMonths = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
    );
    remainingDays = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
    );
    remainingHours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    remainingMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    remainingSeconds = Math.floor((diff % (1000 * 60)) / 1000);
  };

  getTime();
  setInterval(() => {
    getTime();
  }, 1000);
</script>

<section class="me" id="me">
  <div class="text-container">
    <h2 class="greeting">
      <span class="hi">Hi, I'm</span>
      <span class="name"><b>ATLE</b>,</span>
      <span class="a">a</span>
      <span class="profession"><b>FRONTEND</b><b>DEVELOPER</b></span>
    </h2>

    <div class="intro">
      <div>A driven web developer with</div>

      <div class="time">
        <div><span>{years}</span> years</div>
        <div><span>{remainingMonths}</span> months</div>
        <div><span>{remainingDays}</span> days</div>
        <div><span>{remainingHours}</span> hours</div>
        <div><span>{remainingMinutes}</span> minutes</div>
        <div><span></span> and</div>
        <div><span>{remainingSeconds}</span> seconds</div>
      </div>
      <div>
        of experience crafting user-centric, high-performing websites. My
        approach integrates the latest technologies and industry trends,
        ensuring an optimal blend of usability and modern design.
      </div>
    </div>
  </div>
  <div class="image-container">
    <img
      src="https://ca.slack-edge.com/T11FM77H8-U01MGHR9DTR-bd9ba3816596-512"
      alt="Atle kristiansen"
    />
  </div>
</section>
