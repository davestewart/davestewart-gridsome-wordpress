<template>
  <Layout :sidebar="false">
    <div class="card">

      <h1 class="entry-title">Contact</h1>
      <div class="entry-content">
        <p>Get in contact with me for commercial or other reasons here!</p>
        <div class="wpforms-container wpforms-container-full">

          <form class="form" method="post" enctype="multipart/form-data">
            <div class="wpforms-field-container">
              <div class="wpforms-field wpforms-field-name">
                <label class="wpforms-field-label">Name</label>
                <input type="text" name="name" required>
              </div>
              <div class="wpforms-field">
                <label class="wpforms-field-label">Email</label>
                <input type="email" name="email" required>
              </div>
              <div class="wpforms-field">
                <label>Subject</label>
                <input type="text" name="subject" required>
              </div>
              <div class="wpforms-field">
                <label class="wpforms-field-label">Message</label>
                <textarea name="message" required></textarea></div>
            </div>
            <div class="wpforms-submit-container">
              <button type="submit">Send</button>
            </div>
          </form>

        </div>
      </div>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact',
    bodyAttrs: {
      class: 'layout__archive',
    }
  },
}
</script>
