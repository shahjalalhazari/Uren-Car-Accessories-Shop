const GoogleMapLocation = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14445.417656517064!2d55.24410842728953!3d25.157508113803075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sae!4v1740331063605!5m2!1sen!2sae"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMapLocation;